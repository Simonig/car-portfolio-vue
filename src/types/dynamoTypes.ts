
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
    kind: "string";
    S: string;
}

export interface DynamoNumberI {
    kind: "number";
    N: string;
}

export interface DynamoBoolI {
    kind: "boolean";
    BOOL: boolean;
}

export interface DynamoObjectI {
    kind: "object";
    M: DynamoObjectValueI
}

export interface DynamoArrayI {
    kind: "array";
    L: DynamoObjectI[];
}

interface DynamoObjectValueI {
    [key: string]: DynamoNumberI | DynamoBoolI | DynamoObjectI | DynamoStringI 
}

export type DynamoType = DynamoArrayI | DynamoNumberI | DynamoStringI | DynamoObjectI | DynamoBoolI;
