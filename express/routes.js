const express = require('express');
const router = express.Router();

//rutas

router.get('/', (req, res) => {
    res.render('index.ejs');
});

//asi se van agregando las distintas rutas de las paginas
router.get('/login', (req, res) => {
    res.render('login.ejs');
});

//en caso que que una determinada ruta no exista, por defecto devuelve esto
router.get('*' ,(req, res) => {
    res.end('Archivo no encontrado');
});

module.exports = router;