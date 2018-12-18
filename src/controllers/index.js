const express = require('express');
const search = require('./search');
const home = require('./home');
const router = express.Router();


router.get('/', home.get);
router.post('/search', search.post);


module.exports = router;
