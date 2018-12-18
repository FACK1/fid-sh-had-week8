const db_connection = require('../db_connection.js');

const checkUser = (name, email, password) => {

	return new Promise((resolve, reject) => {
		db_connection.query(`select email from users where email = $1`, [email], (error, result) => {
			try {
				resolve({
					params: [name, email, password],
					userExist: result.rows
				})
			} catch (e) {
				reject(error);
			}
		});
	})
}


const addUser = obj => {

	return new Promise((resolve, reject) => {

		if (obj.userExist.length <= 0) {
			db_connection.query('INSERT INTO users (name, email,password) values ($1, $2, $3)', obj.params, (error, result) => {
				if (error) {
					reject(error)
				}
				resolve('added')
			})
		} else {
			resolve('already exist')
		}
	})
}

module.exports = {
  checkUser,
  addUser
}
