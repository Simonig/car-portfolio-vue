import {
  DynamoSubType,
  MappedValue,
  DynamoObjectValueI,
  DynamoObjectMappedI,
  DynamoListI,
} from '../types/dynamoTypes';
import {
  PortfolioSubItem,
  PortfolioItemI,
  PortfolioResponseI,
} from '../types/portFolioItemTypes';
import {
  subItemIsDynamoBoolean,
  subItemIsDynamoList,
  subItemIsDynamoString,
  subItemIsDynamoObject,
  subItemIsDynamoNumber,
} from './dynamoTypeCheckers';

export function mapItems(items: DynamoObjectValueI[]): PortfolioResponseI {
  let maxPrice = 0;
  let minPrice = Infinity;
  const mappedItems: PortfolioItemI[] = items.reduce(
    (acc: PortfolioItemI[], item: DynamoObjectValueI) => {
      const mapItem: PortfolioSubItem = mapSubItems(item);
      if (portfolioSubItemIsPortfolioItem(mapItem) && mapItem.visible) {
        maxPrice = Math.max(mapItem.pricing.price, maxPrice);
        minPrice = Math.min(mapItem.pricing.price, minPrice);
        replaceImageUrl(mapItem);
        acc.push(mapItem);
        return acc;
      }
      return acc;
    },
    []
  );

  return { cars: mappedItems, maxPrice, minPrice };
}

function mapSubItems(item: DynamoObjectValueI): DynamoObjectMappedI {
  const resultItem: DynamoObjectMappedI = {};
  Object.entries(item).forEach(([k, v]) => {
    if (subItemIsDynamoList(v)) {
      resultItem[k] = mapDynamoArray(v);
    } else {
      resultItem[k] = getMappedValue(v);
    }
  });
  return resultItem;
}

function getMappedValue(subItem: DynamoSubType): MappedValue {
  if (subItemIsDynamoObject(subItem)) {
    return mapSubItems(subItem.M);
  } else if (subItemIsDynamoString(subItem)) {
    return subItem.S;
  } else if (subItemIsDynamoBoolean(subItem)) {
    return subItem.BOOL;
  } else if (subItemIsDynamoNumber(subItem)) {
    return Number(subItem.N);
  }
  return false;
}

function mapDynamoArray(subItem: DynamoListI): MappedValue[] {
  return subItem.L.map(x => getMappedValue(x));
}

function replaceImageUrl(item: PortfolioItemI): PortfolioItemI {
  item.teaser.teaserImage = item.teaser.teaserImage.replace(
    'https://assets.cluno.com/',
    '/assets/'
  );
  return item;
}

function portfolioSubItemIsPortfolioItem(
  subItem: PortfolioSubItem
): subItem is PortfolioItemI {
  return (
    (subItem as PortfolioItemI).portfolio !== undefined &&
    (subItem as PortfolioItemI).car !== undefined &&
    (subItem as PortfolioItemI).teaser !== undefined &&
    (subItem as PortfolioItemI).pricing !== undefined
  );
}
