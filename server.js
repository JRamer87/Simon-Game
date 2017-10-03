"use strict";


const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.render("index.html");
});

app.listen(PORT, ()=> {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
