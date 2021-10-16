const express = require('express');
const app = express();
app.use(express.json());

const mongoose = require('./database/connection');
const ventaModel = require('./modelado/venta');
//const controlVentas = require('./controladores/controlVentas');

//app.route('/ventas').get(getVentas).post(createVentas).put(modifyVentas).delete(deleteVentas);
app.get('/ventas',(req,res)=>{ /*traer los datos*/
    console.log(req.params);
    ventaModel.find().then((data)=>{
        res.json(data);
    }).catch(err=>{
        res.send(err);
    });
});

app.get('/ventas/:id',(req,res)=>{ /*traer un solo dato*/
    console.log(req.params);
    ventaModel.find({_id: req.params.id}).then((data)=>{
        res.json(data);
    }).catch(err=>{
        res.send(err);
    });
});

app.post('/ventas',(req,res)=>{ /*crear*/
    console.log(req.params, req.body,req.headers);
    ventaModel.create(req.body).then((data)=>{
        res.json(data);
    }).catch(err=>{
        res.send(err);
    });
});

app.put('/ventas/:id',(req,res)=>{ /*modificar*/
    console.log(req.parmas, req.body, req.headers);
    ventaModel.findByIdAndUpdate(req.params.id, req.body).then((data)=>{
        res.json(data);
    }).catch(err=>{
        res.send(err);
    });
});


app.delete('/ventas/:id',(req,res)=>{ /*eliminar*/
    console.log(req.params);
    ventaModel.findByIdAndDelete(req.params.id).then(data =>{
        res.json(data);
    }).catch(err =>{
        res.send(err);
    });
});
app.listen(3001, ()=>{
    console.log('El servidor esta corriendo en el puerto 3001');
});