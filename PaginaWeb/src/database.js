
require('dotenv').config();
const mongoose= require('mongoose');
mongoose.connect('mongodb+srv://adminpd:4142mintic@cluster0.wz9o2.mongodb.net/ProductosGwen') 


.then(db=> console.log('Conectado a la DB Gwen'))
.catch(err=> console.error(err));