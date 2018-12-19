const addTutorials = require('../database/queries/postData');
const jwt = require('jsonwebtoken');



exports.post = (req, res) => {
  
const { language_name,link} = req.body;
const token = req.cookie;
console.log(token);

  if(req.headers.cookie){
    //jwt.verify ... --> id user
    addTutorials(language_name, link, user_id)
    .then((result)=>{
      res.render("profile", {message: added})
    }).catch((error)=>{
    return error
  });
} else {
  res.render('profile', {result});
}
}
