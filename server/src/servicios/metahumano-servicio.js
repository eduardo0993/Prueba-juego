const metaHumano = require("../db/metahumano-db");


const crearMetaHumano = async(user) => {
    return await metaHumano.crearMetaHumano(user)
}

module.exports = {
    crearMetaHumano
};