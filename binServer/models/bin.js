const mongoose = require('mongoose')

const binSchema = new mongoose.Schema({
	collectionDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  binColour: {
    type: String,
    required: true
  }

})

module.exports = mongoose.model('binCollection', binSchema,'2020')