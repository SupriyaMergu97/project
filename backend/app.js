//declaration
const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const routes= require('./routes');
const app = express();
const port=3100;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',routes);


//db connection
mongoose.connect('mongodb://localhost:27017/homeService', {useNewUrlParser: true});
const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log('mongo DB connected')
})
//connection establish
app.listen(port, () => console.log('server listening on port' + port));
