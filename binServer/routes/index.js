var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Bin = mongoose.model('binCollection')

router.get('/' , function(req , res , next){

  var searchDay = new Date();
  console.log("date is: " + searchDay)


  Bin.findOne({
    "collectionDate" : {
      $gt: searchDay
    }
  }).sort("collectionDate")
    .then((bins) =>{
      console.log(bins.binColour)

      res.render('index' , { title: 'BIN', bins});
    })
    .catch(() => { res.send('Sorry! Something went wrong.'); });

});

module.exports = router;