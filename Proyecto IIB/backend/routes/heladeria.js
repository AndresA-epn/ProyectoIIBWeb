'use strict'
var express=require('express');
var HeladeriaController=require('../controllers/heladeria');
var router=express.Router();
var multipart=require('connect-multiparty');
var multiPartMiddleWare=multipart({uploadDir:'./uploads'});

//pagina de inicio
router.get('/home',HeladeriaController.home);
//guardar informacion de un helado
router.post('/guardar-helado',HeladeriaController.saveHelado);
//ver información de helados
router.get('/helados',HeladeriaController.getHelados);
//ver informacion de un helado
router.get('/helado/:id',HeladeriaController.getHelado);
//eliminar un helado
router.delete('/helado/:id',HeladeriaController.deleteHelado);
//actualizar un helado
router.put('/helado/:id',HeladeriaController.updateHelado);
//agregar imagenes
router.post('/subir-imagen/:id',multiPartMiddleWare,HeladeriaController.uploadImagen);
//recuperar imagen
router.get('/get-imagen/:imagen',HeladeriaController.getImagen);
module.exports=router;