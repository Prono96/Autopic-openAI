const path = require('path') 
const express = require("express");
const User = require('../models/user')
const bcrypt = require('bcryptjs');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const router = express.Router();
const app = express();

// app.use(express.static(__dirname + 'public'))

// Defining the database connection url 
const uri = `mongodb+srv://chiboy:${process.env.MONGODB_PASSWORD}@cluster0.xfvp9cv.mongodb.net/?retryWrites=true&w=majority`


const store = new MongoDBStore({
  uri: uri,
  collection: 'mySessions'
});

// Catch errors
store.on('error', function(error) {
  console.log(error);
});

// Initialise the express-session
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
  store: store
}));

// Router end point
router.get("/signup", async(req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'signup.html'));
  // res.send("welcome to signup")
  console.log("signup page");
})


router.post("/signup", async(req, res) => {
  const {name, email, password, confirmPassword, created_at} = req.body;
  let user = await User.findOne({ email })

  if(user) {
    return res.status(303).send("This user already exist")
  }

  // Hash password and confirmPassword 
  const passwordToHash = password + confirmPassword;

  // Bcrypt
  const hash = await bcrypt.hash(passwordToHash, 12);

  user = new User({
    name,
    email,
    password: hash,
    confirmPassword: hash,
    created_at
  })

  await user.save();

  res.status(201).send("user has been created to the database");
  console.log("user has been created to the database");
}
);

module.exports = router;