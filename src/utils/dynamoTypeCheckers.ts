import {
  DynamoSubType,
  DynamoObjectI,
  DynamoStringI,
  DynamoNumberI,
  DynamoBoolI,
  DynamoListI,
} from '../types/dynamoTypes';

export function subItemIsDynamoObject(
  subItem: DynamoSubType
): subItem is DynamoObjectI {
  return (subItem as DynamoObjectI).M !== undefined;
}

export function subItemIsDynamoList(
  subItem: DynamoSubType
): subItem is DynamoListI {
  return (subItem as DynamoListI).L !== undefined;
}

export function subItemIsDynamoString(
  subItem: DynamoSubType
): subItem is DynamoStringI {
  return (subItem as DynamoStringI).S !== undefined;
}

export function subItemIsDynamoNumber(
  subItem: DynamoSubType
): subItem is DynamoNumberI {
  return (subItem as DynamoNumberI).N !== undefined;
}

export function subItemIsDynamoBoolean(
  subItem: DynamoSubType
): subItem is DynamoBoolI {
  return (subItem as DynamoBoolI).BOOL !== undefined;
}
