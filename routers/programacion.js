
const express = require('express') ;

const {programacion} = require("../data/infoCursos").infoCursos

const routerProgramacion = express.Router();


routerProgramacion.get( "/", (req,res)=>{

    res.send(programacion)

} )


routerProgramacion.get( "/:id", (req,res)=>{

    const id = parseInt( req.params.id );

    const cursos = programacion;

    const curso = cursos.find( (e)=> e.id === id )

    if( !(curso) ){
        res.status(400);
        res.send("no se encontro curso");
    }

    res.status(200).send(curso)

} )

module.exports = routerProgramacion;