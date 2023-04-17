
const metahumano = require("../modelos-db/metaHumano-modelo");

// insertar un mutante
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
    
    // cambiar insertar id como string para utilizarlo
    await metahumano.updateOne({
        _id:userId._id.toString()
    },{$set:{id:userId._id.toString()}})

    return "Meta humano registrado"
}

    // traer todos los mutantes esta funcion no espera ningun parametro
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
    // filtrar mutantes por nombres
const filtrarMetaHumano = async (nombres) =>{
    const res = await metahumano.find({
        nombres:nombres,
    })
    return res
};
    // filtrar mutantes por ciudad de operacion
const filtrarLugarOperacion = async (ciudad_operacion) =>{
    const res = await metahumano.find({
        ciudad_operacion:ciudad_operacion,
    })
    return res
};
    // actualiza los nombres y ciudad de operacion espera estos parametros
const updateMetaHumano = async (id,nombres,ciudad_operacion)=>{
    const est = await metahumano.updateOne({_id:id},{
        $set:{
            nombres:nombres,
            ciudad_operacion:ciudad_operacion
        }
    })

    return 'Campos actualizados'
};
    // asigna vehiculos
 const asignarVehiculo = async (id,tipo_vehi) =>{
    const est = await metahumano.updateOne({_id:id},{
        $set:{
            tipo_vehi:tipo_vehi
        }
    })

    return 'Vehiculo asignado'
}


module.exports={
    crearMetaHumano,
    getmetahumano,
    filtrarMetaHumano,
    filtrarLugarOperacion,
    updateMetaHumano,
    asignarVehiculo
};