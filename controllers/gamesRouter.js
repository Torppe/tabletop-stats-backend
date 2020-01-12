const gamesRouter = require('express').Router()
const Game = require('../models/game')

gamesRouter.get('/', (req, res) => {
  Game.find({}).then(games => {
    res.json(games.map(g => g.toJSON()))
  })
})

gamesRouter.get('/:id', (req, res) => {
  Game.findById(req.params.id)
    .then(g => {
      if(g) {
        res.json(g.toJSON())
      } else {
        res.status(404).end()
      }
    })
    .catch(error => {
      console.log(error)
      res.status(400).send({ error: 'malformatted id' })
    })
})

gamesRouter.delete('/:id', (req, res, next) => {
  Game.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

gamesRouter.post('/', (req, res) => {
  const body = req.body

  if(!body.title) {
    return res.status(400).json({
      error: 'title missing'
    })
  }

  const game = new Game({
    title: body.title,
    date: new Date()
  })

  game.save().then(savedGame => {
    res.json(savedGame.toJSON())
  })
})

module.exports = gamesRouter
