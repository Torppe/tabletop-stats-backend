const gamesRouter = require('express').Router()
const Game = require('../models/game')
const jwt = require('jsonwebtoken')

gamesRouter.get('/', async (req, res, next) => {
  try {
    const games = await Game.find({})
    res.json(games.map(g => g.toJSON()))
  } catch (error) {
    next(error)
  }
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

gamesRouter.delete('/:id', async (req, res, next) => {
  try {
    const decodedToken = jwt.verify(req.token, process.env.SECRET)

    if(!req.token || !decodedToken.id) {
      return res.status(401).json({ error: 'token missing or invalid' })
    }

    await Game.findByIdAndRemove(req.params.id)
    res.status(204).end()
  } catch(error) {
    next(error)
  }
})

gamesRouter.post('/', async (req, res, next) => {
  const body = req.body
  try {
    const decodedToken = jwt.verify(req.token, process.env.SECRET)

    if(!req.token || !decodedToken.id) {
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
    next(error)
  }
})

module.exports = gamesRouter
