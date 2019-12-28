const express = require('express')
const router = express.Router()
const bin = require('../models/bin')

router.get('/', async (req, res) => {
  try {
    const bins = await bin.find()
    res.json(bins)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/next', async (req, res) => {
  var searchDay = new Date();
  console.log("date is: " + searchDay)

  try
  {
    const bins = await bin.findOne({
      "collectionDate" : {
        $gt: searchDay
      }
    }).sort("collectionDate")
    res.json(bins)
  }
  catch (err)
  {
    res.status(500).json({ message: err.message })
  }
})


module.exports = router