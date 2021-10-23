var express = require('express');
var rutaVentas = express.Router();
const controlVentas = require('../controlador/controlVentas');

rutaVentas.route('/')
    .get(controlVentas.listVentas)
    .post(controlVentas.createVentas);

rutaVentas.route('/:id')
    .get(controlVentas.getVentas)
    .put(controlVentas.modifyVentas)
    .delete(controlVentas.deleteVentas);


module.exports = rutaVentas;