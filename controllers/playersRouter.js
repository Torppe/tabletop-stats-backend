const playersRouter = require('express').Router()
const Player = require('../models/player')
const jwt = require('jsonwebtoken')

playersRouter.get('/', async (req, res, next) => {
  try {
    const players = await Player.find({})
    res.json(players.map(p => p.toJSON()))
  } catch(error) {
    next(error)
  }
})

playersRouter.get('/:id', async (req, res) => {
  try {
    const player = await Player.findById(req.params.id)
    if(player) {
      res.json(player.toJSON())
    } else {
      res.status(404).end()
    }
  } catch (error) {
    console.log(error)
    res.status(400).send({ error: 'malformatted id' })
  }
})

playersRouter.delete('/:id', async (req, res, next) => {
  try {
    const decodedToken = jwt.verify(req.token, process.env.SECRET)

    if(!req.token || !decodedToken.id) {
      return res.status(401).json({ error: 'token missing or invalid' })
    }

    await Player.findByIdAndRemove(req.params.id)
    res.status(204).end()
  } catch (error) {
    next(error)
  }
})

playersRouter.post('/', async (req, res, next) => {
  try {
    const decodedToken = jwt.verify(req.token, process.env.SECRET)

    if(!req.token || !decodedToken.id) {
      return res.status(401).json({ error: 'token missing or invalid' })
    }

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
  } catch(error) {
    next(error)
  }
})

module.exports = playersRouter
