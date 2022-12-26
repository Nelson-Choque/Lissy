

const express = require('express');

const app = express();

const {infoCursos} = require('./infoCursos')


app.listen(3000, ()=>{

    console.log("-el servidor esta escuchando en el puerto 3000")

} )


app.get( "/", (req,res)=>{

    res.send("<h2>timy sal de mi mesa!!!</h2>")

} )


app.get( "/api/cursos", (req,res)=>{

    res.send(infoCursos)

} )
