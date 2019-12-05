import { DynamoPortafolioItemI, DynamoSubType, DynamoObjectI, DynamoArrayI, DynamoStringI, DynamoNumberI, DynamoBoolI, DynamoValue, DynamoObjectValueI } from "../../types/dynamoTypes";
import { PortfolioSubItem, PortfolioItemI } from "../../types/portFolioItemTypes";

export function mapItems(items: DynamoPortafolioItemI[]): PortfolioItemI[] {
    return items.reduce((acc: any[], item: DynamoPortafolioItemI) => {
        const mapItem: PortfolioItemI = mapSubItems(item);
        if (mapItem.visible) {
            mapItem.teaser.teaserImage = mapItem.teaser.teaserImage.replace('https://assets.cluno.com/', '/assets/')
            acc.push(mapItem)
            return acc;
        }
        return acc
    }, [])
}




function mapSubItems(item: DynamoPortafolioItemI | DynamoObjectValueI ): PortfolioSubItem | DynamoObjectValueI {
    const resultItem: PortfolioSubItem | DynamoObjectValueI = {};
    Object.entries(item).forEach(([k, v]) => {
        resultItem[k] = getDynamoValue(v);
    })
    return resultItem;
}

function getDynamoValue(subItem: DynamoSubType): DynamoValue {
    if (subItemIsDynamoObject(subItem)) {
        return mapSubItems(subItem.M)
    } else if (subItemIsDynamoList(subItem)) {
        return subItem.L.map((x: DynamoSubType) => getDynamoValue(x))
    } else if (subItemIsDynamoString(subItem)){
        return subItem.S
    } else if(subItemIsDynamoBoolean(subItem)) {
        return subItem.BOOL;
    } else return parseInt(subItem.N);
    
}

function subItemIsDynamoObject(subItem: DynamoSubType): subItem is DynamoObjectI {
    return (subItem as DynamoObjectI).M !== undefined;
}

function subItemIsDynamoList(subItem: DynamoSubType): subItem is DynamoArrayI {
    return (subItem as DynamoArrayI).L !== undefined;
}

function subItemIsDynamoString(subItem: DynamoSubType): subItem is DynamoStringI {
    return (subItem as DynamoStringI).S !== undefined;
}

function subItemIsDynamoNumber(subItem: DynamoSubType): subItem is DynamoNumberI {
    return (subItem as DynamoNumberI).N !== undefined;
}

function subItemIsDynamoBoolean(subItem: DynamoSubType): subItem is DynamoBoolI {
    return (subItem as DynamoBoolI).BOOL !== undefined;
}
