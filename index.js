const path = require('path') 
const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



const port = process.env.PORT || 5000;
const uri = `mongodb+srv://chiboy:${process.env.MONGODB_PASSWORD}@cluster0.xfvp9cv.mongodb.net/?retryWrites=true&w=majority`

// Connection to the MongoDB
mongoose.connect(uri, { useNewUrlParser: true })
  .then(() => console.log('Connected To Database!'))
  .catch(err => console.error('Error connecting to database', err));


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json())

// Serve static files from the 'public' directory


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'))
app.use('/openai', require('./routes/openaiRoutes'))
app.use('/openai', require('./routes/signupRoutes'));



app.listen(port, () => console.log(`This app is listening on port ${port}`));
