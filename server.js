const express = require('express');

const app = express();

const PORT = 8000;
const data = require('./data/questions.json');

app.get('/', (req, res) => {
  res.json(data);
})

app.listen(PORT, () =>{
  console.log('listening on port: ', PORT);
})