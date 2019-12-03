import { mapItems } from './mapItems';

export default function getCarsPortafolio(){
    const portafolio = (<any>require('./dynamodb.export.json'))
    const Items = (<any>portafolio).Items;
    const itemsMapped = mapItems(Items);
    itemsMapped.sort((a, b) => a.pricing.price - b.pricing.price)
    return itemsMapped;
}

