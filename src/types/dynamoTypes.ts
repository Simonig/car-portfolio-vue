
export interface DynamoPortafolioItemI {
    portafolio: DynamoStringI;
    conditions: DynamoObjectI;
    visible: DynamoBoolI;
    car: DynamoObjectI;
    available: DynamoBoolI;
    detailUrl: DynamoStringI;
    teaser: DynamoObjectI;
    labels: DynamoArrayI;
    segment: DynamoStringI;
    images: DynamoArrayI;
    id: DynamoStringI;
    pricing: DynamoObjectI;
}

export interface DynamoStringI {
    S: string;
}

export interface DynamoNumberI {
    N: string;
}

export interface DynamoBoolI {
    BOOL: boolean;
}

export interface DynamoObjectI {
    M: DynamoObjectValueI
}

export interface DynamoArrayI {
    L: DynamoObjectI[];
}

export interface DynamoObjectValueI {
    [key: string]: DynamoValue
}

type DynamoPrimitivValues = string | boolean | number

export type DynamoValue = DynamoPrimitivValues | DynamoObjectValueI | DynamoPrimitivValues[];

export type DynamoSubType = DynamoArrayI | DynamoNumberI | DynamoStringI | DynamoObjectI | DynamoBoolI;