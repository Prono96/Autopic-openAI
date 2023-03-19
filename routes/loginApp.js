const express = require("express");
const session = require('express-session');
const router = express.Router();
const app = express();

// Initialise the express-session
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false
}));

router.get("/login", (req, res) => {
  console.log(res.session);
  res.status(200).send("You are logged in");
  console.log("you are logged in");
});

module.exports = router;