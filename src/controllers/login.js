const postUser = require('../database/queries/postUser');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
require('env2')('./config.env');
const { SECRET } = process.env

exports.get = (req, res) => {
    res.render('login');
}

exports.post = (req, res) => {

  const {email, password } = req.body;

  postUser.checkUser(email)
  .then( result => {

    if(result <= 0){
      res.render('login', {message: 'email does not exsit/password is wrong'});
      return
    }

    bcrypt.compare(password, result[0].password, (err, flag) => {
            if (err) {
              throw new Error(err);
              return
            }

            if (!flag) {
    					res.render('login', {message: 'email does not exsit/password is wrong'});
              return
            }

            const { id, name, email} = result[0];
            const token = jwt.sign({id, email}, SECRET);

            res.cookie('logged_in', token, {maxAge : 999999999}).render('profile',
             {name: name});
          });
}
  )
  .catch((e) => { throw new Error(e) })
}
