const addTutorials = require('../database/queries/postData');
const jwt = require('jsonwebtoken');
const  cookie = require('cookie');
const {	SECRET } = process.env


exports.post = (req, res) => {


		if (req.headers.cookie) {
			const { language_name,	link } = req.body;
			const token = cookie.parse(req.headers.cookie).logged_in;
			jwt.verify(token, SECRET, function (err, decoded) {
					if (err) {
						throw new Error(err)
						return
					}

					const user_id = decoded.id;
					addTutorials(language_name.toUpperCase(), link, user_id)
						.then(
							res.render("profile", {message: "added"})
								).catch((error) => {
									throw new Error(error)
									return
								});
							})
				} else {
					res.send('You are not logged in');
				}
			}
