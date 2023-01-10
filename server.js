const studentController = require('./controller/studentController');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:root@todolist-db.yq0veoe.mongodb.net/StudentDb' , ()=>{
    console.log("Mongodb Successfully Connected");
});

// port number 
app.listen(3000 ,() => {
    console.log("You are Listening to Port number 3000");
});

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

studentController(app);
