const postUser = require('../database/queries/postUser');
const bcrypt = require("bcryptjs");

exports.get = (req, res) => {
    res.render('signup');
}

exports.post = (req, res) => {

	const { name, email, password } = req.body;

	bcrypt.genSalt(10, function (err, salt) {
		bcrypt.hash(password, salt, function (error, hash) {
			if (error) {
				 throw new Error(error)
         return
			} else {

				postUser.checkUser(email)
					.then(result => postUser.addUser(result, name, email, hash))
					.then(message => {
						res.render('signup', {message});
					})
					.catch(err => { throw new Error(err) })
			}
		})
	})
}
