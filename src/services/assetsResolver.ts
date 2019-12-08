import path from 'path';
import { Request, Response } from 'express';
import { downloadAsset } from '../utils/downloadAsset';
import { assetsFolder } from '../utils/paths';
import { isSupportedType } from '../utils/isSupportedType';

// Hacky solution to resolver images without enabling cors in the browser
export async function assetsResolver(req: Request, res: Response) {
    if (isSupportedType(req.url)) {
        const assetUrl = req.url.replace('/assets/', 'https://assets.cluno.com/');
        const assetName = assetUrl.split('/')[assetUrl.split('/').length - 1];
        const assetDest = path.join(assetsFolder, assetName);
        try {
            await downloadAsset(assetUrl, assetDest);
            res.sendFile(assetDest);
        } catch (err) {
            console.log(err);
            res.status(404);
            res.send({ error: `asset with url ${assetUrl} not found` });
        }
    } else {
        res.status(403);
        res.send({ error: `url not supported` });
    }
}
