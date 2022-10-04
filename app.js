const express = require("express");
const app = express();
const path = require("path");
// requiero el router
const router = require('./src/routes/mainRouter');
// declaro que lo voy a usar:
app.use(router);

// declaro el Motor de vistas
app.set('view engine','ejs');
app.set('views', path.join(__dirname , './src/views'));

// defino que carpeta contiene archivos estáticos
//app.use(express.static(path.join(__dirname ,'../public')));
app.use(express.static('./public'));
app.use(express.urlencoded({extended: false}));


//app.use(express.static('./public')); MIra que aca lo pusiste sin el path resolve,
//app.use(express.static(path.resolve(__dirname,"public")));

// determino el puerto
app.listen(process.env.PORT || 3030, () => console.log("Servidor corriendo en puerto 3030"));