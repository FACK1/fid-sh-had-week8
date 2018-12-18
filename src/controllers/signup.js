const postUser = require('../database/queries/postUser');
const bcrypt = require("bcryptjs");

exports.get = (req, res) => {
    res.render('signup');
}

exports.post = (req, res) => {

	const name = req.body.name;
	const email = req.body.email;
	const password = req.body.password;

	bcrypt.genSalt(10, function (err, salt) {
		bcrypt.hash(password, salt, function (err, hash) {
			if (err) {
				return error //handle to server error
			} else {

				postUser.checkUser(name, email, hash)
					.then(postUser.addUser)
					.then(message => {
						res.render('signup', {message});
					})
					.catch(console.log)
			}
		})
	})
}
