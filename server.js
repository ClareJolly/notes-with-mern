var express = require('express');
const MongoClient = require('mongodb').MongoClient
var app = express();

// add cross site scripting
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/', function(req, res){
  res.send('<div id="message">NodeNotes</div>');
});

app.get('/api/getnotes', (req, res) => {
  db.collection('notes').find().toArray((err, result) => {
    if (err) return console.log(err)
    console.log(result)
    res.json(result)
    // renders index.ejs
    // res.render('index.ejs', {quotes: result})
  })
})


var db
const port = 5001;

// mongodb://<dbuser>:<dbpassword>@ds155833.mlab.com:55833/node-notes
MongoClient.connect('mongodb://nodenotes:password1@ds155833.mlab.com:55833/node-notes', (err, client) => {
  if (err) return console.log(err)
  db = client.db('node-notes') // whatever your database name is
// MongoClient.connect('mongodb://sa:password1@ds113454.mlab.com:13454/star-wars-quotes', (err, client) => {
//   if (err) return console.log(err)
//   db = client.db('star-wars-quotes')
  app.listen(port, () => console.log('server started on port 5001'));
})

// app.listen(5001);
