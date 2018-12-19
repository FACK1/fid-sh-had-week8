const app = require('./app.js')

const port = process.env.PORT || 3002
app.listen(port, () => {
  console.log(`Our app is running on http://localhost:${port}`);
});
