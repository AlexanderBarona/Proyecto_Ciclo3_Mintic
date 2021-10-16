const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
    dni: { type:Number, required:true },
    /*dni:Number,*/
    name:String,
    age:Number,
    semester:Number
});

const ventaModel = mongoose.model('venta',ventaSchema);
// export default ventasModel;
module.exports=ventaModel;
