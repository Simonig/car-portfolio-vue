import express from 'express';
import portafolio from './dynamodb.export.json'

const app = express();


app.get('/portafolio', (req: express.Request, res: express.Response) =>
    res.send(portafolio)
);

export default app;