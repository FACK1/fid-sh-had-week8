const express = require('express');
const search = require('./search');
const home = require('./home');
const error=require('./error');
const signup = require('./signup');
const router = express.Router();


router.get('/', home.get);
router.post('/search', search.post);

router.get('/signup', signup.get);
router.post('/signup', signup.post);

router.use(error.pageNotFound);
router.use(error.serverError);


module.exports = router;
