const mongoose = require('mongoose')

const gameSchema = mongoose.Schema({
  title: String,
  date: Date,
  matches: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Match"
  }]
})

gameSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Game', gameSchema)