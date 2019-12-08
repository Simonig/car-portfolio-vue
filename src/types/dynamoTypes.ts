export interface PortfolioJsonI {
  Items: DynamoObjectValueI[];
}

export interface DynamoListI {
  L: DynamoArrayItem[];
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
  M: DynamoObjectValueI;
}

export interface DynamoObjectValueI {
  [key: string]: DynamoSubType;
}

export interface DynamoObjectMappedI {
  [key: string]: MappedValue | MappedValue[];
}

type DynamoArrayItem =
  | DynamoNumberI
  | DynamoStringI
  | DynamoObjectI
  | DynamoBoolI;

export type DynamoSubType =
  | DynamoListI
  | DynamoNumberI
  | DynamoStringI
  | DynamoObjectI
  | DynamoBoolI;

export type PrimitivValues = string | boolean | number;
export type ArrayI = DynamoObjectMappedI[] | PrimitivValues[];
export type MappedValue = PrimitivValues | DynamoObjectMappedI | ArrayI;
