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

const getmetahumano = async (req,res) => {
  try {
    const estado = await metaHumanoServicio.getmetahumano();
    return res.status(200).send(estado);
  } catch (e) {
    console.log(e)
    return res.Status(500).send({
      Status:"Error",
      Message:"Contacte al admin",
      Token: null,
    })
  }
}

const filtrarMetaHumano = async (req,res) =>{
  try {
    const resp = await metaHumanoServicio.filtrarMetaHumano(req.body.nombres);
    return res.status(200).send(resp);
  } catch (e) {
    return res.Status(500).send({
      Status: "Error",
      Message: "Contacte al admin",
    })
  }
}

const filtrarLugarOperacion = async (req,res) =>{
  try {
    const resp = await metaHumanoServicio.filtrarLugarOperacion(req.body.ciudad_operacion);
    return res.status(200).send(resp);
  } catch (e) {
    return res.Status(500).send({
      Status: "Error",
      Message: "Contacte al admin",
    })
  }
}

module.exports={
    crearMetaHumano,
    getmetahumano,
    filtrarMetaHumano,
    filtrarLugarOperacion
}