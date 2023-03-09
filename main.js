const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const routes = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded());

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is online on ${port}`);
})