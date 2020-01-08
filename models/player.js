const mongoose = require('mongoose')

const playerSchema = mongoose.Schema({
  name: String,
  date: Date,
  matches: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Match'
  }]
})

playerSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Player', playerSchema)