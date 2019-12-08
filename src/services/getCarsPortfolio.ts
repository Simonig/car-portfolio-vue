import { mapItems } from '../utils/mapPortfolioItems';
import { DynamoObjectValueI, PortfolioJsonI } from '../types/dynamoTypes';

export function getCarsPortafolio() {
  const portafolio = require('../../assets/dynamodb.export.json') as PortfolioJsonI;

  const portfolioItems: DynamoObjectValueI[] = portafolio.Items;

  const portafolioReponse = mapItems(portfolioItems);
  portafolioReponse.cars.sort((a, b) => a.pricing.price - b.pricing.price);
  return portafolioReponse;
}
