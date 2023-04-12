const express = require("express");

const vehiculoControlador = require("../controlador/vehiculo-controlador");

const rutas = express.Router();

rutas.post("/crearVehiculo",vehiculoControlador.crearVehiculo);

rutas.post("/getVehiculos",vehiculoControlador.getVehiculo);

module.exports= rutas;