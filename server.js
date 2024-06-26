const express = require("express");
const bodyParser=require("body-parser");
const app = express();
const dbconnection = require('./db');

var productsRoute = require('./routes/productsRoute');
var userRoute=require('./routes/userRoute');
var orderRoute=require('./routes/orderRoute')
const path=require('path');
app.use(bodyParser.json());
app.use('/api/products/', productsRoute);
app.use('/api/users/',userRoute)
app.use('/api/orders/',orderRoute)
app.get("/", (req, res) => {
    res.send('Partea de backend');
});

if(process.env.NODE_ENV==='production')
    {
        app.use('/',express.static('client/build'))

        app.get('*', (req,res)=>{
            res.sendFile(path.resolve(__dirname,'client/build/index.html'))
        })
    }



const port = process.env.PORT||8000;
app.listen(port, () => console.log('Serverul Node JS rulează pe portul ', port));


