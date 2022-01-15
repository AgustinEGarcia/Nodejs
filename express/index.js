/* servidor creado con nodejs puro

const http = require('http');

const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader =('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(3000, () => {
    console.log('Server on port 3000');
})
*/

//server creado con express
const express = require('express');

const app = express();

//middlewares

app.use((req, res, next) => {
    console.log('request url: ' + req.url);
    next();
});

app.use((req, res, next) => {
    console.log('La ejecución pasó por acá');
    next();
});



//rutas

app.get('/', (req, res) => {
    res.send('Hello Word');
});

//asi se van agregando las distintas rutas de las paginas
app.get('/login', (req, res) => {
    res.send('Esta es la página de login');
});

//en caso que que una determinada ruta no exista, por defecto devuelve esto
app.get('*' ,(req, res) => {
    res.end('Archivo no encontrado');
});

app.listen(3000, () => {
    console.log('Server on port 3000');
});