var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Bin = mongoose.model('binCollection')

router.get('/' , function(req , res , next){

  Bin.find()
    .then((bins) =>{

      res.render('index' , { title: 'BIN', bins});
    })
    .catch(() => { res.send('Sorry! Something went wrong.'); });

});

module.exports = router;