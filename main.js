const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const routes = require('./routes/index');

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is online on ${port}`);
})