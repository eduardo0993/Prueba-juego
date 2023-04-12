const { Schema, modelo, model } = require("mongoose");

const metaHumanoSchema = Schema({
    nombres:String,
    apellidos:String,
    alias:String,
    bando:String,
    ciudad_operacion:String,
    condicion: String,
    poder:Array,
    registro_vehi: String,
    tipo_vehi:String
},{versionKey:false});

metaHumanoSchema.method("toJSON", function(){
  const {_id, ...object} = this.toObject();
  object.id = _id;
  return object;
});

module.exports= model("metahumanos", metaHumanoSchema);