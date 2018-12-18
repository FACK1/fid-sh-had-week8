const app = require('./app.js')

const port = process.env.port || 3001
app.listen(port, () => {
  console.log(`Our app is running on http://localhost:${port}`);
});
