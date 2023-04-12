const vehiculoservicio = require("../db/vehiculo-db");


const crearVehiculo = async(car) => {
    return await vehiculoservicio.crearVehiculo(car)
}



module.exports = {
    crearVehiculo
};