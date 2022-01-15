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

app.get('/', (req, res) => {
    res.send('Hello Word');
});

app.listen(3000, () => {
    console.log('Server on port 3000');
});