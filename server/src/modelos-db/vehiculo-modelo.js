const { Schema, modelo, model } = require("mongoose");

const vehiculoSchema = Schema({
    nombre:String,
    tipo:String,
    registro:String
},{versionkey:false});

vehiculoSchema.method("toJSON", function(){
  const {_id, ...object} = this.toObject();
  object.uid = _id;
  return object;
});

module.exports= model("vehiculos", vehiculoSchema);