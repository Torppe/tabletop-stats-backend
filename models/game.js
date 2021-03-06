const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const gameSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  date: Date
})

gameSchema.plugin(uniqueValidator)

gameSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Game', gameSchema)