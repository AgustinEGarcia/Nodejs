const express = require('express');
const router = express.Router();
const app = express();


//rutas

router.get('/', (req, res) => {
    res.render('index.ejs');
});

app.use(express.json());

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

router.post('/user', (req, res) => {
    console.log(req.body);
    res.send('POST REQUEST RECEIVED');
});

router.put('/contact', (req, res) => {
    res.send('PUT REQUEST RECEIVED');
});

router.delete('/test', (req, res) => {
    res.send('DELETE REQUEST RECEIVED');
});

module.exports = router;