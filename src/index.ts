import app from './app';

const server = app.listen(3333, () => {
    console.log('open http://localhost:3333/ in your browser');
});