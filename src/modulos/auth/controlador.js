
const autenticacion= require("../../autentication/index");
const TABLA ='usuarios';


module.exports = function(dbInyectada){

    const db= dbInyectada;

    if(!db){
        db = resizeByrequire ('../../DB/mysql');
    }
    
/* llama a la funcion que esta en el archivo mysql.js que le va a devolver un usuario 
y contraseña mediante el select y se genera el token al llamar a la funcion que esta en 
el archivo de autenticacion*/

    async function login (email, password){
        const data= await db.query(TABLA, {email:email});

        if(password == data.password && email == data.email){

            return autenticacion.asignarToken({...data})

        }else{

            throw new Error("Credenciales invalidas, acceso denegado");
        }



    }


return{
   login,
}
    
   
}