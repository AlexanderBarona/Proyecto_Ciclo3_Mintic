const mongoose = require('mongoose');

const URL_ATLAS = 'mongodb+srv://admin:admin123@cluster0.f2hkf.mongodb.net/prueba?retryWrites=true&w=majority';

mongoose.connect(URL_ATLAS, {useNewUrlParser:true, useUnifiedTopology:true});

const connection = mongoose.connection;
connection.once("open",function() {
    console.log("Conexion a base de datos establecida correctamente");
});

module.exports= mongoose;