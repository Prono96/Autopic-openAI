const express = require("express");
const router = express.Router()

router.get("/login", (req, res) => {
  res.status(200).send("You are logged in");
  console.log("you are logged in")
});

module.exports = router;