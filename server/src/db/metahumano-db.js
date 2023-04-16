
const metahumano = require("../modelos-db/metaHumano-modelo");

const crearMetaHumano = async(user) => {
    const use = new metahumano({
        nombres:user.nombres,
        apellidos:user.apellidos,
        alias:user.alias,
        bando:user.bando,
        ciudad_operacion:user.ciudad_operacion,
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
};

const filtrarMetaHumano = async (nombres) =>{
    const res = await metahumano.find({
        nombres:nombres,
    })
    return res
};

const filtrarLugarOperacion = async (ciudad_operacion) =>{
    const res = await metahumano.find({
        ciudad_operacion:ciudad_operacion,
    })
    return res
};

const updateMetaHumano = async (id,nombres,ciudad_operacion)=>{
    const est = await metahumano.updateOne({_id:id},{
        $set:{
            nombres:nombres,
            ciudad_operacion:ciudad_operacion
        }
    })

    return 'Campos actualizados'
};

/* const asignarVehiculo = async (id,vehiculo) =>{
    const est = await metahumano.updateOne({_id:id},{
        $set:{
            vehiculo:vehiculo
        }
    })
} */




module.exports={
    crearMetaHumano,
    getmetahumano,
    filtrarMetaHumano,
    filtrarLugarOperacion,
    updateMetaHumano,
   // asignarVehiculo
};