const express = require("express");
const rutasControlador = require("../controlador/metahumano-controlador");

const rutas = express.Router();

rutas.post("/crearMetaHumano", rutasControlador.crearMetaHumano);

rutas.post("/getUsuario",rutasControlador.getmetahumano);

rutas.post("/filtrarMetaHumanoNombre",rutasControlador.filtrarMetaHumano);

rutas.post("/filtrarMetaHumanoCiudad",rutasControlador.filtrarLugarOperacion);

module.exports= rutas;