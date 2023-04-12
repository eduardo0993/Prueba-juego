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

module.exports = {
    crearMetaHumano,
    getmetahumano,
    filtrarMetaHumano,
    filtrarLugarOperacion
};