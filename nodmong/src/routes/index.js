const router= require('express').Router();

router.get('/', (req, res)=>{
    res.render('index');
});

router.get('/about', (req, res)=>{
    res.render('about');
});

router.get('/productos', (req, res)=>{
    res.render('admprod');
});




module.exports= router;