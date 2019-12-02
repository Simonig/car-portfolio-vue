
//TODO: Add types
export function mapItems(items: []): any[]{

    return items.reduce((acc: any[], item) => {
        const mapItem = mapByType(item);
        if(mapItem.visible){
            acc.push(mapItem)
            return acc;
        }
        return acc
    }, [])
}


function mapByType(item: any): any{
    if(item instanceof Object === false) return item;
    const newItem: any  = {};

    for(let key of Object.keys(item)) {
        if(key === 'M'){
            return mapByType(item[key])
        } else if(key === 'L' && Array.isArray(item[key])) {
            return item[key].map((x: any) => mapByType(x))
        } else if(key === 'S' || key === 'BOOL') {
            return item[key]
        } else if(key === 'N') return parseInt(item[key]);
        
        newItem[key] = mapByType(item[key]);
    }

    return newItem;
}