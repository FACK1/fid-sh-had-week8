const getTutorials = require('../database/queries/getData');


exports.post = (req, res) => {

const languageSearch = (req.body.language).toUpperCase();
  getTutorials(languageSearch, (error, result) => {
    if (error) {
      console.log(error);
      return
    }
    res.render('search', {result});
  })
}
