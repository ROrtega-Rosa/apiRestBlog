const express= require("express");

const router = express.Router();
const respuesta = require('../../red/respuestas');
const controlador= require('./index');

//rutas

router.get('/',todos);
router.get('/:id',uno);
router.post('/',agregar);
router.put('/:id',actualizar);
router.delete('/:id',eliminar);

//select

async function todos(req, res,next){

    try{

        const items = await controlador.todos();
        respuesta.success(req,res,items,200);

    }catch(err){

        next(err);
    }
}

//select uno

async function uno(req,res, next){

    try{

        const items=await controlador.uno(req.params.id);
        respuesta.success(req,res,items,200);

    }catch(err){
        next(err);
    }
}

//insert

async function agregar(req, res, next){

    try{

        const items= await controlador.agregar(req.body);
        respuesta.success(req,res,"se ha insertado un registro",200);

    }catch(err){
        respuesta.error(err);
        next(err);
    }

}
//actualizar

async function actualizar(req,res,next){

    try{

        const items= await controlador.actualizar(req.params.id, req.body);
        respuesta.success(req,res,"se ha actualizado un registro",200);

    }catch(err){

        respuesta.erro(err);
        next(err);
    }

}

//eliminar

async function eliminar(req, res,next){

    try{

        const items= await controlador.eliminar(req.params.id);
        respuesta.success(req,res,"se ha eliminado un registro",200);
    }catch(err){

        respuesta.error(err);
        next(err);
    }

    
}


module.exports= router;