const playersRouter = require('express').Router()
const Player = require('../models/player')

playersRouter.get('/', (req, res) => {
  Player.find({}).then(players => {
    res.json(players.map(p => p.toJSON()))
  })
})

playersRouter.get('/:id', (req, res) => {
  Player.findById(req.params.id)
    .then(p => {
      if(p) {
        res.json(p.toJSON())
      } else {
        res.status(404).end()
      }
    })
    .catch(error => {
      console.log(error)
      res.status(400).send({ error: 'malformatted id' })
    })
})

playersRouter.delete('/:id', (req, res, next) => {
  Player.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

playersRouter.post('/', (req, res) => {
  const body = req.body

  if(!body.name) {
    return res.status(400).json({
      error: 'name missing'
    })
  }

  const player = new Player({
    name: body.name,
    date: new Date()
  })

  player.save().then(savedPlayer => {
    res.json(savedPlayer.toJSON())
  })
})

module.exports = playersRouter
