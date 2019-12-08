import { initPortfolioService } from '../src/services/carsPortfolio.service';

describe('Portfolio Service', () => {
  const portfolioService = initPortfolioService();
  describe('getAll method', () => {
    it('should contain a car list', () => {
      const { cars } = portfolioService.getAll();
      expect(cars.length).toBe(57);
    });
  });

  describe('getBy method', () => {
    it('should return an item with the corresponding id', () => {
      const item = portfolioService.getById('115');
      if (item) {
        expect(item.id).toBe('115');
      }
    });
  });
});
