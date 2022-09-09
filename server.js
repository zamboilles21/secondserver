const express = require('express');
const path = require('path');
const app = express();
const port=3000;

app.use('/css',express.static(path.join(__dirname+'/css')));

app.get('/', function (req, res) {
  res.status(200).sendFile(path.join(__dirname+'/index.html'));
});

app.get('/erdek',function(reg,res){
  res.status(200).sendFile(path.join(__dirname+'/erdek.html'));
});

app.get('/contats',function(reg,res){
  res.status(200).sendFile(path.join(__dirname+'/contats.html'));
});

app.listen(port, ()=>{console.log('életjel')});