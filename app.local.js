const app = require('./app.js');

app.local.listen(3000, () => {
  console.log('Listening on port 3000');
});