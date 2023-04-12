const metaHumano = require("../db/metahumano-db");


const crearMetaHumano = async(user) => {
    return await metaHumano.crearMetaHumano(user);
}

const getmetahumano = async() => {
    return await metaHumano.getmetahumano();
}
module.exports = {
    crearMetaHumano,
    getmetahumano
};