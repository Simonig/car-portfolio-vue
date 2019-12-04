import { Application, Request, Response } from "express";
import getCarsPortafolio from '../services/carsPortfolio/getCarsPortfolio';



export default function apiRoutes(app: Application) {
    const itemsMapped = getCarsPortafolio()
    app.get('/api/portfolio', (req: Request, res: Response) => {
        res.send({ data: itemsMapped })
    })    
}
