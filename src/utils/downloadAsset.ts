import fs from 'fs';
import axios from 'axios';

export async function downloadAsset(url: string, assetDest: string) {
  if (fs.existsSync(assetDest)) {
    return;
  }

  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });

  const writer = fs.createWriteStream(assetDest);
  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}
