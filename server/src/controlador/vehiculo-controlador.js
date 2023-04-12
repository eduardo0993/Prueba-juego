const vehiculoServicio = require("../servicios/vehiculo-servicio");

const crearVehiculo = async(req,res) =>{
    try {
        const estado = await vehiculoServicio.crearVehiculo(req.body);
        return res.status(200).send(estado);
    } catch (e) {
        return res.status(500).send({
            status: "Error",
            Message: "contacte al admin",
            Token: null, 
        })
    }
   
}

    module.exports= {
    crearVehiculo
    }