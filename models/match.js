const mongoose = require('mongoose')

const pointsSchema = mongoose.Schema({
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true
  },
  points: {
    type: Number,
    required: true
  }
}, { _id: false })

const matchSchema = mongoose.Schema({
  date: Date,
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game',
    required: true
  },
  players: {
    type:[pointsSchema],
    required: true
  }
})

matchSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Match', matchSchema)