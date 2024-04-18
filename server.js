const express = require('express');
const cors=require('cors');
const fs = require("fs");

const app = express();

const PORT = 8000;
const data = require('./data/questions.json');
app.use(cors());
app.options("*", cors());

app.get('/', (req, res) => {
    fs.readFile('./data/questions.json',"utf-8", (err, data) => {
      if(err)console.log(err)
      const result = JSON.parse(data)
      res.send(result);
    })
})

app.listen(PORT, () =>{
  console.log('listening on port: ', PORT);
})