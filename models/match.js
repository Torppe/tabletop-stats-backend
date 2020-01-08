const mongoose = require('mongoose')

const matchSchema = mongoose.Schema({
  date: Date,
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game'
  },
  players: [{
    player: {type: mongoose.Schema.Types.ObjectId, ref: 'Player'},
    points: Number
  }]
})

matchSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Match', matchSchema)