const mongoose = require("mongoose");
require("dotenv").config();

const url=process.env.DBSERVERLOCAL

const dbConexion = async () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(url);
        console.log("Conexion a la DB exitosa");
    } catch (error) {
     throw new Error("Error de conexion, comunicate con el administrador");
    }
}

module.exports={
    dbConexion
};