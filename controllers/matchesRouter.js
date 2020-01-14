const matchesRouter = require('express').Router()
const Match = require('../models/match')

matchesRouter.get('/', async (req, res) => {
  const matches = await Match
    .find({})
    .populate('players.player')
  res.json(matches.map(m => m.toJSON()))
})

matchesRouter.get('/:id', async (req, res) => {
  const match = await Match
    .findById(req.params.id)
    .populate('players.player')
  try {
    if(match) {
      res.json(match.toJSON())
    } else {
      res.status(404).end()
    }
  } catch(error) {
    console.log(error)
    res.status(400).send({ error: 'malformatted id' })
  }
})

matchesRouter.get('/game/:id', async (req, res) => {
  const matches = await Match
    .find({ game: req.params.id })
    .populate('players.player')
    
  try {
    if(matches) {
      res.json(matches.map(m => m.toJSON()))
    } else {
      res.status(404).end()
    }
  } catch(error) {
    console.log(error)
    res.status(400).send({ error: 'malformatted id' })
  }
})

matchesRouter.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  matches = matches.filter(m => m.id !== id)

  res.status(204).end()
})

matchesRouter.post('/', async (req, res) => {
  const body = req.body

  if(!body.players || body.players.length < 1) {
    return res.status(400).json({
      error: 'players missing'
    })
  }

  if(!body.game) {
    return res.status(400).json({
      error: 'game missing'
    })
  }

  const match = new Match({
    date: new Date(),
    game: body.game,
    players: body.players
  })

  const savedMatch = await match.save()
  await savedMatch
    .populate('players.player')
    .execPopulate()

  try {
    if(savedMatch) {
      res.status(201).json(savedMatch.toJSON())
    } else {
      res.status(404).end()
    }
  } catch(error) {
    console.log(error)
  }
})

module.exports = matchesRouter
