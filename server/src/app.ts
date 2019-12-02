import express from 'express';
import portafolio from './dynamodb.export.json'
import { mapItems } from './mapItems.js';

const app = express();
const Items = (<any>portafolio).Items;
const itemsMapped = mapItems(Items);

app.get('/portafolio', (req: express.Request, res: express.Response) => res.send(itemsMapped));

export default app;