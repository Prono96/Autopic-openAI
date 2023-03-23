const path = require('path') 
const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const port = process.env.PORT || 5000;
const uri = `mongodb+srv://chiboy:${process.env.MONGODB_PASSWORD}@cluster0.xfvp9cv.mongodb.net/?retryWrites=true&w=majority`

// Connection to the MongoDB
mongoose.connect(uri).then(
  (res) => { 
    console.log("Connected to the data base")
  },
  err => { console.log(err) }
);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'))
app.use('/openai', require('./routes/openaiRoutes'))
app.use('/openai', require('./routes/loginApp'));



app.listen(port, () => console.log(`This app is listening on port ${port}`));
