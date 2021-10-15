const express= require('express');
const path= require('path');
const exphbs =require('express-handlebars');
const methodOverride=require('method-override');
const session = require('express-session');
const flash=require('connect-flash');
//inicializaciones
const app = express();
require('./database');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
defaultLayout: 'main' ,
layoutsDir: path.join(app.get('views'), 'layouts'),
partialsDir:path.join(app.get('views'), 'partials'),
extname:'.hbs'

}));

app.set('view engine', '.hbs');

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret:'secretpal',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());
//app.use(cors());

// global variables
app.use((req, res, next)=> {
res.locals.success_msg= req.flash('success_msg');
res.locals.error_msg= req.flash('error_msg');
    next();
});
// routes
app.use(require('./routes/index'));
app.use(require('./routes/users'));
app.use(require('./routes/notes'));

//Static Files

app.use(express.static(path.join(__dirname,'public')));

// Server
app.listen(app.get('port'),() => {
    console.log('Servidor en puerto', app.get('port'));
});