import { Application, Request, Response } from 'express';
import { initPortfolioService } from '../services/carsPortfolio.service';

export function apiRoutes(app: Application) {
  const portfolioService = initPortfolioService();

  app.get('/api/portfolio', (req: Request, res: Response) => {
    res.send({ data: portfolioService.getAll() });
  });
  app.get('/api/portfolio/:id', (req: Request, res: Response) => {
    const id = req.params.id;

    res.send({ data: portfolioService.getById(id) });
  });
}
