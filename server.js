/* eslint-disable no-console */
/* server.js main file by Amanda Tome */
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('req = \n', req);
  res.send('Test CI with Travis');
});

const server = app.listen(3001, () => {
  // eslint-disable-next-line no-console
  console.log('app running on port 3001');
});

// eslint-disable-next-line no-console
console.log('server = ', server);

module.exports = server;