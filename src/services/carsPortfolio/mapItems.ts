import { DynamoPortafolioItemI, DynamoType, DynamoObjectI } from "../../types/dynamoTypes";

//TODO: Add types
export function mapItems(items: DynamoPortafolioItemI[]): any[] {

    return items.reduce((acc: any[], item: DynamoPortafolioItemI) => {
        const mapItem = mapByType(item);
        if (mapItem.visible) {
            mapItem.teaser.teaserImage = mapItem.teaser.teaserImage.replace('https://assets.cluno.com/', '/assets/')
            acc.push(mapItem)
            return acc;
        }
        return acc
    }, [])
}




function mapByType(item: DynamoType | DynamoPortafolioItemI): any {
    const newItem: any = {};
    for (let [key, value] of Object.entries(item)) {
        if (key === 'M') {
            return mapByType(value)
        } else if (key === 'L' && Array.isArray(value)) {
            return value.map((x: DynamoObjectI) => mapByType(x))
        } else if (key === 'S' || key === 'BOOL') {
            return value
        } else if (key === 'N') return parseInt(value);

        newItem[key] = mapByType(value);
    }

    return newItem;
}