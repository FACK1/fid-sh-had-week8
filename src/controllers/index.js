const express = require('express');
// const search = require('./search');
// const home = require('./home');
const addTutorials = require('./addtutorials');
const router = express.Router();


router.post('/addtutorials', addTutorials.post);


module.exports = router
