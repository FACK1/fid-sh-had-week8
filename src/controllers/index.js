const express = require('express');
const search = require('./search');
const home = require('./home');
const error=require('./error');
const signup = require('./signup');
const login = require('./login');
const addTutorials = require('./addtutorials');
const router = express.Router();


router.get('/signup', signup.get);
router.post('/signup', signup.post);

router.get('/login', login.get);
router.post('/login', login.post);

router.post('/addtutorial', addTutorials.post);

router.use(error.pageNotFound);
router.use(error.serverError);


module.exports = router
