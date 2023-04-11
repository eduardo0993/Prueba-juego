const express = require("express");
const rutasControlador = require("../controlador/metahumano-controlador");

const rutas = express.Router();

rutas.post("/crearMetaHumano", rutasControlador.crearMetaHumano);


module.exports= rutas;