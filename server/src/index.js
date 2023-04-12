const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const rutasApi = require("../src/rutas/index");
require("../src/db/database-config").dbConexion();


// App de Express
const app = express();
const server = require("http").createServer(app);

app.use(cors());
app.use(express.json({ limit: "25mb", extended: true }));
app.set("json spaces", 2);
app.use(express.urlencoded({extended: false}));

rutasApi(app),


// puerto de escucha del servidor
server.listen(process.env.PORT || 3100, (err) => {
    if (err) throw new Error(err);
    console.log("Server ejecutandose en el puerto:", process.env.PORT||3100);
})

module.exports=app;