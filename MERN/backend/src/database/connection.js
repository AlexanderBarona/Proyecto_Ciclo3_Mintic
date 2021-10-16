const mongoose = require('mongoose');
const URL_ATLAS = require('./env');
mongoose.connect(URL_ATLAS, {useNewUrlParser:true, useUnifiedTopology:true});

const connection = mongoose.connection;
connection.once("open",function() {
    console.log("Conexion a base de datos establecida correctamente");
});

module.exports= mongoose;