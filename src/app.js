const express = require("express");
const morgan= require("morgan");
const config = require("./config");
const cors= require("cors");
const entradas= require("./modulos/entradas/rutas");
const categorias= require("./modulos/categorias/rutas");
const usuarios=require("./modulos/usuarios/rutas");
const login =require("./modulos/auth/rutas");
const error = require ('./red/errors');

const app= express();

//Middleware

app.use(cors());
app.use(morgan("dev"));

// fixing "413 Request Entity Too Large" errors
app.use(express.json({limit: "50mb", extended: true}))
app.use(express.urlencoded({limit: "50mb",parameterLimit: 1000000 ,extended: true}))

//configuracion
app.set('port', config.app.port);

//rutas

app.use('/api/entradas',entradas);
app.use('/api/categorias',categorias);
app.use('/api/usuarios',usuarios);
app.use('/api/login',login);

//error

app.use(error);



module.exports = app;

