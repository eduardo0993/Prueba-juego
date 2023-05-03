const { Schema, modelo, model } = require("mongoose");

const metaHumanoSchema = Schema({
    nombres:{type:String,require:true},
    apellidos:{type:String,require:true},
    alias:{type:String,require:true},
    bando:{type:String,require:true},
    ciudad_operacion:{type:String,require:true},
    condicion: {type:String,require:true},
    poder:{type:Array,require:true},
    registro_vehi:{type:String,require:true},
    tipo_vehi:{type:String,require:true},
},{versionKey:false});

metaHumanoSchema.method("toJSON", function(){
  const {_id, ...object} = this.toObject();
  object.id = _id;
  return object;
});

module.exports= model("metahumanos", metaHumanoSchema);