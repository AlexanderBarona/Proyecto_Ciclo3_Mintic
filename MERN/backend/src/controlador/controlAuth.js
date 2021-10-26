//const {GoogleAuth} = require('google-auth-library');
const {OAuth2Client} = require('google-auth-library');
const ClienteID = require('../../route/envAuth')
const esquema = require('../modelado/usuario');

const jwt = require('jsonwebtoken');
const pas = require('../../route/envjwt');

googleAuth=(req,res)=>{
    console.log(req.headers,req.body,req.params);
    const client = new OAuth2Client(ClienteID);
    const {token} = req.body;
    client.verifyIdToken({
        idToken:token,
        audience: ClienteID
    }).then(resp =>{
        console.log(resp);
        const{name,email}=resp.payload;
        console.log(name,email)
        //guardando en la base de datos
        return esquema.findOneAndUpdate({email:email},{name:name},{new:true,upsert:true});
    }).then(user=>{
        console.log(user);
        //crear token para la aplicacion
        var tokenApp = jwt.sign({user:user},pas);
        res.json(tokenApp);
    }).catch(err=>{
        console.log(err);
        res.status(500).send(err);
    });
}

module.exports={googleAuth};