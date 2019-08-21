var express = require('express');
const app = express();
const hbs = require('hbs')
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine','hbs')

//Helper
require('./hbs/helpers/helpers')

 app.get('/',(req,res)=>{
    res.render('home',{
        nombre: 'maTias',
    });
});
app.get('/data',(req,res)=>{
    res.send('Hello data')
 });
 app.get('/about',(req,res)=>{
     res.render('about',{
     });
 })
 

app.listen(port,()=>{
    console.log(`escuchando peticiones en puerto ${port}`)
});