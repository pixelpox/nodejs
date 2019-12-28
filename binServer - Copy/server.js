const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
require('dotenv').config()


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))
app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(port, () => {  console.log('We are live on ' + port);});