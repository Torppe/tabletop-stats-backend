const matchesRouter = require('express').Router()
const Match = require('../models/match')

matchesRouter.get('/', (req, res) => {
  Match.find({}).then(matches => {
    res.json(matches.map(m => m.toJSON()))
  })
})

matchesRouter.get('/:id', (req, res) => {
  Match.findById(req.params.id)
  .then(m => {
    if(m) {
      res.json(m.toJSON())
    } else {
      res.status(404).end()
    }
  })
  .catch(error => {
    console.log(error)
    res.status(400).send({ error: 'malformatted id' })
  })
})

matchesRouter.get('/game/:id', (req, res) => {
  Match.find({ game: req.params.id })
    .then(matches => {
      if(matches) {
        res.json(matches.map(m => m.toJSON()))
      } else {
        res.status(404).end()
      }
    })
    .catch(error => {
      console.log(error)
      res.status(400).send({ error: 'malformatted id' })
    })
})

matchesRouter.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  matches = matches.filter(m => m.id !== id)

  res.status(204).end()
})

matchesRouter.post('/', (req, res) => {
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

  match.save().then(savedMatch => {
    res.json(savedMatch.toJSON())
  })
})

module.exports = matchesRouter
