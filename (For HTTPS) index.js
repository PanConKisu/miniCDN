const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 10900; //change me

//cache config

app.use((req, res, next) => {
  res.set('Cache-Control', 'public, max-age=86400');
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

const options = {
  key: fs.readFileSync('/directory/of/your/certs/privkey.pem'), //change me
  cert: fs.readFileSync('/directory/of/your/fullchain.pem'), //change me
};

https.createServer(options, app).listen(port, () => {
  console.log(`Running on https://localhost:${port}`);
});
