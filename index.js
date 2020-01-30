const express = require('express')
const app = express();
var bodyParser = require('body-parser')
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use('/adminAssets',express.static('views/adminAssets'));
var session = require('express-session');
var flash = require('req-flash');
app.use(session({secret: 'ssshhhhh',resave: false,saveUninitialized: true}));
app.use(flash());
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const routes = require('./controller/LoginController');
app.get('/', routes);
app.post('/validate',urlencodedParser,routes);
app.get('/dashboard',routes);
// Product Route 
const productroutes = require('./controller/ProductController');
app.get('/products/add',productroutes);
app.post('/send/data', urlencodedParser,productroutes);
app.get('/products',productroutes);
app.listen(3000);