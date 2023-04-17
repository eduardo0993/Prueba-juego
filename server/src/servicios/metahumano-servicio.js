const metaHumano = require("../db/metahumano-db");


const crearMetaHumano = async(user) => {
    return await metaHumano.crearMetaHumano(user);
}

const getmetahumano = async() => {
    return await metaHumano.getmetahumano();
}

const filtrarMetaHumano = async(nombres) => {
    return await metaHumano.filtrarMetaHumano(nombres);
}

const filtrarLugarOperacion = async(ciudad_operacion) => {
    return await metaHumano.filtrarLugarOperacion(ciudad_operacion);
}

const updateMetaHumano = async(_id,nombres)=> {
    return await metaHumano.updateMetaHumano(_id,nombres);
}

const updateMetaHumanoCiudad_operacion = async(_id,ciudad_operacion)=> {
    return await metaHumano.updateMetaHumanoCiudad_operacion(_id,ciudad_operacion);
}

const asignarVehiculo = async(_id,tipo_vehi) => {
    return await metaHumano.asignarVehiculo(_id,tipo_vehi);
}

module.exports = {
    crearMetaHumano,
    getmetahumano,
    filtrarMetaHumano,
    filtrarLugarOperacion,
    updateMetaHumano,
    asignarVehiculo,
    updateMetaHumanoCiudad_operacion
    
};