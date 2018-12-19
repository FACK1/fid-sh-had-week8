const addTutorials = require('../database/queries/postData');
exports.post = (req, res) => {
const { language_name,link} = req.body;

  if(req.headers.cookie){
    addTutorials(language_name, link, user_id)
    .then((result)=>{
      res.render("addtutorials", {message: added})
    }).catch((error)=>{
    return error
  });
} else {
  res.render('addtutorials', {result});
}
}
