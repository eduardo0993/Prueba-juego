const metaHumanoServicio = require("../servicios/metahumano-servicio");

const crearMetaHumano = async (req,res) => {
    try {
       const estado = await metaHumanoServicio.crearMetaHumano(req.body);
       return res.status(200).send(estado);
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        Status: "Error",
        Message: "Contacte al admin",
        Token: null,
      })
    }
}

module.exports={
    crearMetaHumano
}