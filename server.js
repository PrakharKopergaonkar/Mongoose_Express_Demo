const express = require('express');
const  app = express();
const password = require("./password")["password"]


const dbURI =   `mongodb+srv://Prakhar04:${password}@nodeclustur.urejm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('app listening on port 3000!');
});