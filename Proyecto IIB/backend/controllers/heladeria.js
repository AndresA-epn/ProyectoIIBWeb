'use strict'
var Helado=require("../models/helado");
var path=require('path');
var fs=require('fs');
const { exists } = require("../models/helado");

var controller={
    home:function(req,res){
        return res.status(201).send(
        "<h1>Hola desde el controllador</h1>"
    );
    },
    getHelados:function(req,res){
        Helado.find({}).sort().exec((err,helados)=>{
            if (err) return res.status(500).send({message:'Error al recuperar los datos'});
            if(!helados) return res.status(404).send({message:'No hay helados para mostrar'});
            return res.status(200).send({helados});
        })
    },
    saveHelado:function(req,res){
        var helado = new Helado();
        var params=req.body;
        helado.fabricante=params.fabricante;
        helado.tipo=params.tipo;
        helado.sabor=params.sabor;
        helado.precio=params.precio;

        helado.save((err,heladoStored)=>{
            if (err) return res.status(500).send({message:'Error al guardar'});
            if(!heladoStored) return res.status(404).send({message:'No se ha guardado el helado'});
            return res.status(200).send({helado:heladoStored});
        })
    },
    getHelado:function(req,res){
        var heladoId=req.params.id;
        if(heladoId==null) return res.status(404).send({message:'El helado no existe'});
        Helado.findById(heladoId,(err,helado)=>{
            if (err) return res.status(500).send({message:'Error al recuperar los datos'});
            if(!helado) return res.status(404).send({message:'El helado no existe'});
            return res.status(200).send({helado});
        })
    },
    deleteHelado:function(req,res){
        var heladoId=req.params.id;
        Helado.findByIdAndRemove(heladoId,(err,heladoRemoved)=>{
            if (err) return res.status(500).send({message:'Error al eliminar los datos'});
            if(!heladoRemoved) return res.status(404).send({message:'No se puede eliminar el helado'});
            return res.status(200).send({helado:heladoRemoved});
        })
    },
    updateHelado:function(req,res){
        var heladoId=req.params.id;
        var update=req.body;
        Helado.findByIdAndUpdate(heladoId,update,{new:true},(err,heladoUpdate)=>{
            if (err) return res.status(500).send({message:'Error al actualizar los datos'});
            if(!heladoUpdate) return res.status(404).send({message:'El helado no existe para actualizar'});
            return res.status(200).send({helado:heladoUpdate});
        })
    },
    uploadImagen:function(req,res){
        var heladoId=req.params.id;
        var fileName='Imagen no subida';

        if(req.files){
            var filePath=req.files.imagen.path;
            var file_split=filePath.split('\\');
            var fileName=file_split[1];
            var extSplit=fileName.split('\.');
            var fileExt=extSplit[1];
            if(fileExt=='png' || fileExt=='jpg' || fileExt=='jpeg' || fileExt=='gif'){
                Helado.findByIdAndUpdate(heladoId,{imagen:fileName},{new:true},(err,heladoUpdated)=>{
                    if (err) return res.status(500).send({message:'La imagen no se ha subido'});
                    if(!heladoId) return res.status(404).send({message:'El helado no existe y no se subio la imagen'});
                    return res.status(200).send({helado:heladoId});
                });
            }else{
                fs.unlink(filePath,(err)=>{
                    return res.status(200).send({message:'La extensión no es válida'})
                });
            }
        }else{
            return res.status(200).send({message:fileName});
        }
    },
    getImagen:function(req,res){
        var file=req.params.imagen;
        var path_file="./uploads/"+file;
        fs.exists(path_file,(exists)=>{
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                res.status(200).send({message:'No existe la imagen'});
            }
        })
    }
}
module.exports=controller;