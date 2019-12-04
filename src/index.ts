import app from './app';

const server = app.listen(8080, () => {
    console.log('open http://localhost:8080/ in your browser');
});