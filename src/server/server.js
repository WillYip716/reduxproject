const mongoose = require("mongoose");
const express = require("express");
require('dotenv').config()
const items = require('./routes/items');
const bodyParser = require("body-parser");

const app = express();

mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true })
  .then(() => console.log('DB connected'))
  .catch((err) => console.log('DB error', err))

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', items);


app.listen(port, () => console.log(`App listening on port ${port}`));

if (process.env.NODE_ENV === 'production') { 
    app.enable('trust proxy'); 
    app.use((req, res, next) => { 
      if (req.secure) next();
      else res.redirect(`https://'${req.headers.host}${req.url}`);
    });
  }