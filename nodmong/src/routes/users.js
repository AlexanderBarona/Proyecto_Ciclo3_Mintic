const router= require('express').Router();
const User = require('../models/User');
const passport = require('passport');

router.get('/users/signin', (req, res)=>{
    res.render('users/signin');
});

router.post('/users/signin', passport.authenticate('local', {
successRedirect: '/',
failureRedirect: '/users/signin',
failureFlash: true

}));

router.get('/users/signup', (req, res)=>{
    res.render('users/signup');
});


router.post('/users/signup', async (req, res)=>{
    const {nombre,email,password,confirm_password}= req.body;
    const errors = [];
   if (password != confirm_password) {
       errors.push({text: 'Las contraseñas con coinciden'});
   }
   if (password.length <8) {
    errors.push({text: 'La contraseña debe tener al menos 8 caracteres'});
}
if (errors.length >0) {
    res.render('users/signup', {errors,nombre,email,password,confirm_password});
} else {
    const emailUser= await User.findOne({email:email});
    if (emailUser) {
        req.flash('error_msg', 'Ya existe ese correo registrado');
        res.redirect('/users/signup');
    }
    const newUser = new User({nombre, email, password});
    newUser.password = await newUser.encryptPassword(password);
    await newUser.save();
    req.flash('success_msg', 'Usuario registrado con éxito');
    res.redirect('/users/signin');

}
});
router.get('/users/logout', (req, res) =>{
req.logOut();
res.redirect('/');
});

router.get('/adduser', async (req, res) =>{
    res.render('users/nuevousr');
});


router.post('/users/nuevousr', async (req, res)=>{
    const {nombre, email, password, rol, estado}= req.body;

    const nuevousuario= new User({nombre, email, password, rol, estado});
    await nuevousuario.save();
    req.flash('success_msg','Usuario creado satisfactoriamente');
    res.redirect('/listuser');
});

router.get('/listuser',  async(req, res)=>{
    
    const listausr = await User.find().lean();
        
      res.render('users/listausuarios', { listausr });
     
    });
    
    
    router.get('/edituser/:id', async (req, res)=> {
const useramod= await User.findById(req.params.id).lean();
res.render('users/edituser',{useramod});
    });

    router.put('/users/edituser/:id', async (req, res)=> {
        const {nombre, email, password, rol, estado}= req.body;
        await User.findByIdAndUpdate(req.params.id, {nombre, email, password, rol, estado});
        req.flash('success_msg', 'Usuario Editaco Satisfactoriamente');
        res.redirect('users/listuser');
    });
    
    
    router.delete('/deluser/:id', async (req, res) => {
        await User.findByIdAndDelete(req.params.id).lean();
        req.flash('success_msg','Usuario Eliminado Satisfactoriamente');
        res.redirect('users/listausuarios');
    });



module.exports= router;