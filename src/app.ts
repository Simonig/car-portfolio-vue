import express from 'express';
import { apiRoutes } from './routes/api';
import { clientRoute } from './routes/client';
const app = express();

apiRoutes(app);
clientRoute(app);

export { app };
