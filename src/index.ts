import app from './app';

const server = app.listen(3001, () => {
    console.log('open http://localhost:3001/ in your browser');
});