import { mapItems } from '../utils/mapPortfolioItems';
import { DynamoObjectValueI, PortfolioJsonI } from '../types/dynamoTypes';

export function getCarsPortfolio() {
  const portfolio = require('../../assets/dynamodb.export.json') as PortfolioJsonI;
  const portfolioItems: DynamoObjectValueI[] = portfolio.Items;
  const portfolioReponse = mapItems(portfolioItems);
  portfolioReponse.cars.sort((a, b) => a.pricing.price - b.pricing.price);

  return {
    getAll() {
      return portfolioReponse;
    },
    getById(id: string) {
      return portfolioReponse.cars.find(car => car.id === id);
    },
  };
}
