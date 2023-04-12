const metaHumanoRutas = require("./metahumano-ruta");
const vehiculosRutas = require ("./vehiculos-rutas");

module.exports = (app) =>{
    //app.use("/api", pendiente);
    //app.use("/api", vehiculosRutas);
    app.use("/api", metaHumanoRutas);

    app.get("/load", (req,resp)=> {
        resp.send("Api cargando");
    })
}