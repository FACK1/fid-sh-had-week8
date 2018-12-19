const express=require("express");
const path=require("path");
const exphbs = require('express-handlebars');
const compression = require('compression');
const router = require('./controllers');
const cookieParser = require('cookie-parser');

const app=express();

app.use(compression());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.set("views",path.join(__dirname,"views"));
app.set("view engine","hbs");

app.engine(
  "hbs",exphbs({
    extname:"hbs",
    layoutsDir:path.join(__dirname,'views','layouts'),
    partialsDir:path.join(__dirname,'views','partials'),
    defaultLayout:"main"
  })
)

app.use(router);

module.exports= app ;
