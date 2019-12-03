import { Application, Request, Response } from "express";
import getCarsPortafolio from '../services/carsPortafolio/getCarsPortafolio';



export default function apiRoutes(app: Application){
    const itemsMapped = getCarsPortafolio()
    app.get('/api/portafolio', (req: Request, res: Response) => {
        res.send(itemsMapped)
    })
}
