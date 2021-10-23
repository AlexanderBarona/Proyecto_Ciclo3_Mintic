const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

const mongoose = require('./database/connection');
const rutaVentas = require('./rutas/rutaVentas');
app.use('/ventas',rutaVentas);
//const ventaModel = require('./modelado/venta');

app.listen(3001, ()=>{
    console.log('El servidor esta corriendo en el puerto 3001');
});