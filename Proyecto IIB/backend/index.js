'use strict'
var mongoose=require('mongoose');
var port='3600';
mongoose.promise=global.Promise;
var app=require('./app');
mongoose.connect('mongodb://127.0.0.1:27017/Heladeria')
.then(()=>{
    console.log("Conexion establecida con la bdd");
    app.listen(port,()=>{
        console.log("Conexion establecida en el url: localhost:3600");
    })
})
.catch(err=>console.log(err))