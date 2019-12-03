import { mapItems } from './mapItems';
import { DynamoPortafolioItemI } from '../../types/dynamoTypes';

export default function getCarsPortafolio() {
    const portafolio = (<any>require('./dynamodb.export.json'))

    const Items: DynamoPortafolioItemI[] = portafolio.Items;

    const itemsMapped = mapItems(Items);
    itemsMapped.sort((a, b) => a.pricing.price - b.pricing.price)
    return itemsMapped;
}

