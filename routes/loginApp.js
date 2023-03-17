const express = require("express");
const router = express.Router()

router.get("/login", (req, res) => {
  res.send("You are logged in");
  console.log("you are logged in")
});

module.exports = router;