import express from 'express';
import path from 'path';
import { Application, Request, Response } from "express";


export default function clientRoute(app: Application) {
    app.use('/', express.static(__dirname + '/../../build/public'));

    app.get('/', (req: Request, res: Response) =>
        res.sendFile(path.join(__dirname + '/../../build/public/index.html'))
    );
}