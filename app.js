const express = require("express");
const path = require("path");

const app = express();
//app.use(express.static('./public'));

//const app = express();
//app.use(express.static('./public')); MIra que aca lo pusiste sin el path resolve,
app.use(express.static(path.resolve(__dirname,"public")));

app.get('/', (req,res) => {
//    console.log('Hola Mundo!');
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});
app.get('/register', (req,res) => {
    //    console.log('Hola Mundo!');
        res.sendFile(path.resolve(__dirname, "./views/home.html"));
    });

app.listen(3030, () => console.log("Servidor corriendo en puerto 3030"));