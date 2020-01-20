const gamesRouter = require('express').Router()
const token = require('../utils/token')
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

gamesRouter.post('/', async (req, res) => {
  const body = req.body
  try {
    const decodedTokenId = token.verifyToken(req)

    if(!decodedTokenId) {
      return res.status(401).json({ error: 'token missing or invalid' })
    }

    if(!body.title) {
      return res.status(400).json({
        error: 'title missing'
      })
    }

    const game = new Game({
      title: body.title,
      date: new Date()
    })

    const savedGame = await game.save()
    res.json(savedGame.toJSON())
    // game.save().then(savedGame => {
    //   res.json(savedGame.toJSON())
    // })
  } catch(error) {
    console.log(error)
  }
})

module.exports = gamesRouter
