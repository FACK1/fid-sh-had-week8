const express = require('express');
const search = require('./search');
const home = require('./home');
const error=require('./error');
const signup = require('./signup');
const login = require('./login');
const validate = require('../validation/validate.js');
const { signupValidation} = require('../validation/server-side');
const router = express.Router();

const addTutorials = require('./addtutorials');

const logout = require('./logout');

router.get('/', home.get);
router.post('/search', search.post);

router.get('/signup', signup.get);
router.post('/signup',validate(signupValidation), signup.post);

router.get('/login', login.get);
router.post('/login', login.post);

router.post('/addtutorial', addTutorials.post);

router.get('/logout', logout.get)


router.use(error.pageNotFound);
router.use(error.serverError);


module.exports = router
