const vehiculo = require("../modelos-db/vehiculo-modelo");

const crearVehiculo = async(car) =>{
    const use = new vehiculo({
        nombre:car.nombre,
        tipo:car.tipo,
        registro:car.registro
    })

    await use.save()
    const userId = await vehiculo.findOne({
        nombre:car.nombre    
    },{_id:1})

    await vehiculo.updateOne({
        _id:userId._id.toString()    
    },{$set:{id:userId._id.toString()}})

    return "vehiculo fue registrado"

}

const getVehiculo = async() =>{

}

module.exports= {
    crearVehiculo
};