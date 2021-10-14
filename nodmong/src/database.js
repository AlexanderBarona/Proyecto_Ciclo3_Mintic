const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/gwen') 


.then(db=> console.log('Conectado a la DB gwen'))
.catch(err=> console.error(err));