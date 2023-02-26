const path = require('path') 
const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

const app = express();

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'))
app.use('/openai', require('./routes/openaiRoutes'))



app.listen(port, () => console.log(`This app is listening on port ${port}`));
