
const metahumano = require("../modelos-db/metaHumano-modelo");

const crearMetaHumano = async(user) => {
    const use = new metahumano({
        nombres:user.nombres,
        apellidos:user.apellidos,
        alias:user.alias,
        bando:user.bando,
        ciudad_operacion:user.ciudad,
        condicion:user.condicion,
        poder:user.poder,
        registro_vehi: user.registro_vehi,
        tipo_vehi:user.tipo_vehi
    })
    
    await use.save()
    const userId = await metahumano.findOne({
        nombres:user.nombres    
    },{_id:1})
    
    await metahumano.updateOne({
        _id:userId._id.toString()
    },{$set:{id:userId._id.toString()}})

    return "Meta humano registrado"
}

const getmetahumano = async() =>{
   return await metahumano.find(
    {},
    {
        nombres:1,
        apellidos:1,
        alias:1,
        bando:1,
        ciudad_operacion:1,
        condicion:1,
        poder:1,
        registro_vehi:1,
        tipo_vehi:1    
    }
   )
}

module.exports={
    crearMetaHumano,
    getmetahumano
};