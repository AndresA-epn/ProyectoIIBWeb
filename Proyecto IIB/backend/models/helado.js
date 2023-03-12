'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var HeladoSchema=Schema({
    fabricante:String,
    tipo:String,
    sabor:String,
    precio:Number,
    imagen:String
});
module.exports=mongoose.model('Helado',HeladoSchema);