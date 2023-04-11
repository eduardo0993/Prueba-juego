const { Schema, modelo, model } = require("mongoose");

const metaHumanoSchema = Schema({
    nombres:String,
    apellidos:String,
    alias:String,
    bando:String,
    ciudad:String,
    condicion: String,
    poder:Array,
    registro_vehi: String,
    tipo_vehi:String
},{versionkey:false});

metaHumanoSchema.method("toJSON", function(){
  const {_id, ...object} = this.toObject();
  object.uid = _id;
  return object;
});

module.exports= model("metahumanos", metaHumanoSchema);