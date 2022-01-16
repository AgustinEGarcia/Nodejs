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
const morgan = require('morgan');

const app = express();

// settings -> permiten agregar variables, pero generalmente se las utiliza para 
//establecer las configuraciones de los motores de plantillas

//con app.set agregamos una nueva config
app.set('appName', 'Mi primer servidor');
app.set('views', __dirname + '/views'); //__dirname es una variable global que te
//devuelve la ruta actual del archivo de donde lo llamas, en este caso index.js
app.set('view engine', 'ejs'); // configurando motor de plantillas ejs


//middlewares

app.use(morgan('short'));

/*
//este middleware muestra por consola la url que se visita
app.use((req, res, next) => {
    console.log('request url: ' + req.url);
    next();
});

//este middleware avisa por consola que la ejecucion paso por esta parte del codigo
app.use((req, res, next) => {
    console.log('La ejecución pasó por acá');
    next();
});
*/


//rutas
const routes = require('./routes.js');
app.use(routes);

app.listen(3000, () => {
    console.log('Server on port 3000');
    console.log('Nombre de la app: ', app.get('appName'));
});