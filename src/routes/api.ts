import { Application, Request, Response } from 'express';
import { getCarsPortfolio } from '../services/getCarsPortfolio';

export function apiRoutes(app: Application) {
  const portfolioService = getCarsPortfolio();

  app.get('/api/portfolio', (req: Request, res: Response) => {
    res.send({ data: portfolioService.getAll() });
  });
  app.get('/api/portfolio/:id', (req: Request, res: Response) => {
    const id = req.params.id;

    res.send({ data: portfolioService.getById(id) });
  });
}
