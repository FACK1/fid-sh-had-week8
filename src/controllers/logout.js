exports.get = (req, res) => {
  res.cookie('logged_in', 'false', {maxAge : 0}).render('home');
}
