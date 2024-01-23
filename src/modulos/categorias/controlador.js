

const TABLA ='categorias';


module.exports = function(dbInyectada){

    const db= dbInyectada;

    if(!db){
        db = resizeByrequire ('../../DB/mysql');
    }
    
function todos (){
    return db.todos(TABLA);
}

function uno (id){
    return db.uno(TABLA, id);
}
function agregar(body){
    return db.agregar(TABLA,body);

}
function actualizar(id,body){

    return db.actualizar(TABLA,id,body);
}

function eliminar(id){

    return db.eliminar(TABLA,id);
}


return{
    todos,
    uno,
    agregar,
    actualizar,
    eliminar
}
    
   
}