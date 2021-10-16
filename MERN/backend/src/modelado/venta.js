const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
    dni:{type:Number,required:true},
    name:String,
    age:Number,
    semester:Number
});

const ventaModel = mongoose.model('venta',ventaSchema);
module.exports=ventaModel;

