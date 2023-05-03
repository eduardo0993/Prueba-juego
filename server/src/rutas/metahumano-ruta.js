const express = require("express");
const rutasControlador = require("../controlador/metahumano-controlador");
const {body, validationResult} =require('express-validator')
const rutas = express.Router();

rutas.post("/crearMetaHumano", rutasControlador.crearMetaHumano);

rutas.post("/getUsuario",rutasControlador.getmetahumano);

rutas.post("/filtrarMetaHumanoNombre",rutasControlador.filtrarMetaHumano);

rutas.post("/filtrarMetaHumanoCiudad",rutasControlador.filtrarLugarOperacion);

rutas.post("/updateMetaHumano",rutasControlador.updateMetaHumano);

rutas.post("/updateMetaHumanoCiudadOperacion",rutasControlador.updateMetaHumanoCiudad_operacion)

rutas.post("/asignarVehiculo",rutasControlador.asignarVehiculo,);

module.exports= rutas;