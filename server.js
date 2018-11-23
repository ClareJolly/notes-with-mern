var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('<div id="message">NodeNotes</div>');
});

app.listen(5001);
