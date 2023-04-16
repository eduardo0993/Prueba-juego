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

const getVehiculo = async (req, res) => {
    try {
        const estado = await vehiculoServicio.getVehiculo();
        return res.status(200).send(estado)
    } catch (e) {
        console.log(e)
        return res.status(500).send({
            Status:"Error",
            Message:"Contacte al admin",
            Token: null,
        })
    }
}

    module.exports= {
    crearVehiculo,
    getVehiculo

    }