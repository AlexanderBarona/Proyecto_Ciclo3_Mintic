const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

const mongoose = require('./database/connection');
const rutaVentas = require('./rutas/rutaVentas');
const rutaUsuarios = require('./rutas/rutaUsuarios');
const rutaAuth = require('./rutas/rutaAuth');

app.use('/ventas',rutaVentas);
app.use('/usuarios',rutaUsuarios);
app.use('/auth',rutaAuth);
//const ventaModel = require('./modelado/venta');

app.listen(3001, ()=>{
    console.log('El servidor esta corriendo en el puerto 3001');
});