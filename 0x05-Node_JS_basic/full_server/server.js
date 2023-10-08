const express = require('express');
const indexroutes = require('./routes/index');

const app = express();

const port = 1245;

app.use('/', indexroutes);

app.listen(port, () => {
  console.log(`Express server starting on ${port}`);
});

module.exports = app;
