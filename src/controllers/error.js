
exports.pageNotFound=(req,res)=>{
res.render("404.hbs");
};
exports.serverError=(error,req,res,next)=>{
  res.render("500.hbs");
};
