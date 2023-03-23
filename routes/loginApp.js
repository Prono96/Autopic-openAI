const express = require("express");
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const app = express();

const router = express.Router();
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
  saveUninitialized: true,
  store: store
}));

// create a middleware to check if the session is working
// function requireAuth(req, res, next) {
//   if (req.session.isAuth) {
//     next();
//   } else {
//     res.status(401).send('Unauthorized');
//   }
// }

router.get("/login", (req, res) => {
//  req.session.isAuth = true;
 const sess = req.session
 res.status(200).send(`You are logged in and this is your ${sess}` );
 console.log(sess);
}
);

module.exports = router;