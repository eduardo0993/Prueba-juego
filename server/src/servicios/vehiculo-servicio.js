const vehiculoservicio = require("../db/vehiculo-db");


const crearVehiculo = async(car) => {
    return await vehiculoservicio.crearVehiculo(car);
}

const getVehiculo = async () => {
    return await vehiculoservicio.getVehiculo();
}

module.exports = {
    crearVehiculo,
    getVehiculo
};