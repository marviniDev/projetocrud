
const express = require('express');

const app = express();
const cors = require('cors');

app.use(cors());

const router = require('./routes/index.js');

app.use(express.static(__dirname + '/materialize'));
app.use(express.json());
app.use(router);

app.listen(3001,() => {
  console.log('server is running');
})
