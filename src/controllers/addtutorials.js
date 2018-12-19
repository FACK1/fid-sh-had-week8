const addTutorials = require('../database/queries/postData');
const jwt = require('jsonwebtoken');
const { parse } = require('cookie');
require('env2')('./config.env');
const {	SECRET } = process.env


exports.post = (req, res) => {

		const { language_name,	link } = req.body;
		const token = parse(req.headers.cookie).logged_in;

		if (req.headers.cookie) {
			jwt.verify(token, SECRET, function (err, decoded) {
					if (err) {
						throw new Error(err)
						return
					}

					const user_id = decoded.id;

					addTutorials(language_name, link, user_id)
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
