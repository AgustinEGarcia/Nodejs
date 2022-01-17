const { Router } = require('express');
const express = require('express');
const router = express.Router();


//rutas

/*
router.get('/', (req, res) => {
    res.render('index.ejs');
});
*/
router.use(express.json());

//.all() es una funcion que express, que sirve para que se haga algo antes de que
//se llegue a las rutas que defino en el método

router.all('/user', (req, res, next) => {
    console.log('Por aquí pasó');
    res.send('finish');
    next();
});

router.get('/user', (req, res) => {
    res.json({
        username: 'Agustin',
        lastname: 'Garcia'
    });
});

//asi se van agregando las distintas rutas de las paginas
router.get('/login', (req, res) => {
    res.render('login.ejs');
});

router.post('/user/:id', (req, res) => { //poner los : en la ruta significa que voy a recibir un parametro
    console.log(req.body);
    console.log(req.params);
    res.send('POST REQUEST RECEIVED');
});

router.put('/user/:id', (req, res) => {
    console.log(req.body);
    res.send(`User ${req.params.id} updated`);
});

router.delete('/user/:userId', (req, res) => {
    res.send(`User ${req.params.userId} deleted`);
});

module.exports = router;