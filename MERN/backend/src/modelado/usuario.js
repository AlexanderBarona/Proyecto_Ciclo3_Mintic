const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    admin:{type:Boolean, required:true, default:false}
});

module.exports = mongoose.model('usuario',UsuarioSchema);