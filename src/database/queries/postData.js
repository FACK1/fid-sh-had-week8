const dbConnection = require('../db_connection.js');

const addTutorials = (language_name, link, user_id) => {
  return new Promise((resolve, reject)=>{
    const addTutorialsQuery = 'INSERT INTO tutorials (language_name, link, user_id) VALUES ($1, $2, $3);';
    dbConnection.query(
      addTutorialsQuery,
      [language_name, link, user_id],
      (error, result) => {
        if (error) {
          reject(error)
        } else {
          resolve('added')
        }
      });
  })
};

module.exports = addTutorials;
