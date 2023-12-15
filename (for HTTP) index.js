const express = require('express');
const path = require('path');

const app = express();
const port = 10900; //change me

// cache config
app.use((req, res, next) => {
  res.set('Cache-Control', 'public, max-age=86400');
  next();
});


app.use(express.static(path.join(__dirname, 'public'))); //change public to your CDN folder

app.listen(port, () => {
  console.log(`running on http://localhost:${port}`);
});
