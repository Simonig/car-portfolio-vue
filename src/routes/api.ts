import { Application, Request, Response } from 'express';
import { getCarsPortafolio } from '../services/getCarsPortfolio';

export function apiRoutes(app: Application) {
  const itemsMapped = getCarsPortafolio();

  app.get('/api/portfolio', (req: Request, res: Response) => {
    res.send({ data: itemsMapped });
  });
  app.get('/api/portfolio/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    res.send({ data: itemsMapped.cars.find(car => car.id === id) });
  });
}
