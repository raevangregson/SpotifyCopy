const express = require('express');
const bodyParser = require('body-parser');
const https = require("https");
var cors = require('cors')
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('', (req, res) => {
  res.send('hello world')
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
    
