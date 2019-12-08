import express from 'express';
import Path from 'path';
import { Application, Request, Response } from 'express';
import { publicFolder } from '../utils/paths';
import { assetsResolver } from '../services/assetsResolver';

export function clientRoute(app: Application) {
  app.use('/', express.static(publicFolder));

  app.get('/', (req: Request, res: Response) =>
    res.sendFile(Path.join(publicFolder, 'index.html'))
  );

  app.get('/assets/*', async (req: Request, res: Response) => {
    assetsResolver(req, res);
  });
}
