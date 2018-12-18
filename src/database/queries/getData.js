const db_connection = require('../db_connection.js');

const getTutorials = (language_name, cb) => {

  const q = `select u.name, t.link from tutorials t join users u on u.id = t.user_id
    where language_name = $1;`

  db_connection.query(q, [language_name], (error, result) => {
    if(error){
      console.log(error);
      return cb(error);
    }
    cb(null, result.rows)
  })
}

module.exports = getTutorials;
