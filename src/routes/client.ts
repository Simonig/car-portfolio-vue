import express from 'express';
import Path from 'path';
import Fs from 'fs';
import axios from 'axios'
import { Application, Request, Response } from "express";

const publicFolder = __dirname + '/../../build/public'

async function downloadImage(url: string, imageName: string) {
    if(Fs.existsSync(Path.join(publicFolder, 'img', imageName))){
        return;
    }

    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
    })

    const path = Path.resolve(publicFolder, 'img', imageName)
    const writer = Fs.createWriteStream(path)
    response.data.pipe(writer)

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve)
        writer.on('error', reject)
    })
}


export default function clientRoute(app: Application) {
    app.use('/', express.static(publicFolder));

    app.get('/', (req: Request, res: Response) =>
        res.sendFile(Path.join(__dirname + '/../../build/public/index.html'))
    );
    app.get('/assets/*', async (req: Request, res: Response) => {
        const imgUrl = req.url.replace('/assets/', 'https://assets.cluno.com/');
        const imageName = imgUrl.split('/')[imgUrl.split('/').length - 1]
        await downloadImage(imgUrl, imageName)
        res.sendFile(Path.join(publicFolder, 'img', imageName))
    });
}