var express = require('express');
const MongoClient = require('mongodb').MongoClient
var app = express();

var mongoose = require('mongoose');
// import mongoose from 'mongoose';

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
  // db.collection('notes').find().toArray((err, result) => {
  NotesData.find(function (err, result) {
    if (err) return console.log(err)
    console.log(result)
    res.json(result)
    // renders index.ejs
    // res.render('index.ejs', {quotes: result})
  })
})

app.get('/api/testlocal', (req, res) => {
  NotesData.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
})


var db
const port = 5002;

// mongodb://<dbuser>:<dbpassword>@ds155833.mlab.com:55833/node-notes
// mongoose.connect('mongodb://127.0.0.1:27017/node-notes');
MongoClient.connect('mongodb://nodenotes:password1@ds155833.mlab.com:55833/node-notes', (err, client) => {
  if (err) return console.log(err)
  db = client.db('node-notes') // whatever your database name is
// MongoClient.connect('mongodb://sa:password1@ds113454.mlab.com:13454/star-wars-quotes', (err, client) => {
//   if (err) return console.log(err)
//   db = client.db('star-wars-quotes')
  app.listen(port, () => console.log('server started on port 5002'));
})

var notesSchema = mongoose.Schema({
  title: String, note: String
})

mongoose.connect('mongodb://localhost:27017/node-notes')
  .then(() =>  console.log('mongo db connection succesful'))
  .catch((err) => console.error(err));
// app.listen(5001);
var NotesData = mongoose.model('notes', notesSchema)
