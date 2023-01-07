

const express = require('express');
const ejs = require('ejs');
const connection = require('./dbconfig/dbconfig')

const routerProgramacion = require('./routers/programacion');


const app = express();

//configuration app
app.set("view engine","ejs");

app.use(express.static(__dirname + '/public'));


app.use('/api/cursos',routerProgramacion);


app.listen(3000, ()=>{

    console.log("-el servidor esta escuchando en el puerto 3000")

} )


app.get( "/", (req,res)=>{

    res.render('index');
  

} )


app.get("/productos", (req,res)=>{


    res.render('productos')

})

