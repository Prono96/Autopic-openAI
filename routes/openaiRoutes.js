const express = require('express');
const {createImage} = require("../controllers/openaiControllers");
const {editImage} = require("../controllers/openaiEditImage");
const router = express.Router();

router.post('/generateimage', createImage);
router.post('/editimage', editImage);

module.exports = router;