const express = require('express');
const controlador = require('../controller/mainController');
const router = express.Router();
// falta el controller:
// router.get('/', mainController.index);
// router.get('/detalleMenu', mainController.detalle);

router.get('/',controlador.index);

router.get('/register', controlador.register);
router.get('/login',controlador.login);

router.get('/display_flex', controlador.display_flex);
    
router.post('/login',(req,res) =>{
        console.log(req.body);
        res.redirect('/');
    });

    // exporto el modulo:
module.exports = router;