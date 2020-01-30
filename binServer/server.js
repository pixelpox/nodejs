const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

const dateRouter = require('./routes/date')
const binRouter = require('./routes/bin')
const indexRouter = require('./routes/index')

var http = require('http');

var http_IP = '127.0.0.1';
var http_port = 8899;

require('dotenv').config()


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

app.set('view engine', 'pug');




app.use('/date', dateRouter)
app.use('/bin', binRouter)
app.use('/', indexRouter)

app.use(express.static(__dirname + '/static'));

app.locals.moment = require('moment');



app.listen(port, () => {  console.log('We are live on ' + port);});

var server = http.createServer(function(req, res) {
  require('./router').get(req, res);
}); // end server()

//server.listen(http_port, http_IP);

//console.log('listening to http://' + http_IP + ':' + http_port);