const express = require('express');
const {createImage} = require("../controllers/openaiControllers");
const router = express.Router();

router.post('/generateimage', createImage)

module.exports = router;