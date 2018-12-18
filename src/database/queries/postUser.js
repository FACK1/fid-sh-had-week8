const db_connection = require('../db_connection.js');

const checkUser = (email, cb) => {
    dbConnection.query(`select email from users where email = $1`, [email], (error, result) => {
        if (err) {
          console.log(err);
          return cb(err);
        }
        cb(null, result.rows);
      }
    );
  };


const addUser = (name, email, password, cb) => {

  const q = 'INSERT INTO users (name, email,password) values ($1, $2, $3)'

  db_connection.query(q, [name, email, password], (error, result) => {
    if(error){
      console.log(error);
      return cb(error);
    }
    cb(null)
  })
}

module.exports = {
  checkUser,
  addUser
};
