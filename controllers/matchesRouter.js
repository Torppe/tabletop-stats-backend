const matchesRouter = require('express').Router()
const Match = require('../models/match')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

matchesRouter.get('/', async (req, res, next) => {
  try {
    const matches = await Match
      .find({})
      .populate('players.player')
    res.json(matches.map(m => m.toJSON()))
  } catch(error) {
    next(error)
  }
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

matchesRouter.get('/player/:id', async (req, res) => {
  try {
    const matches = await Match
      .find({ 'players.player': req.params.id })
      .populate('players.player')
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

matchesRouter.delete('/:id', async (req, res) => {
  try {
    const decodedToken = jwt.verify(req.token, process.env.SECRET)

    if(!req.token || !decodedToken.id) {
      return res.status(401).json({ error: 'token missing or invalid' })
    }

    const result = await Match.findByIdAndRemove(req.params.id)
    if(result) {
      res.status(204).end()
    }
  } catch(error) {
    console.log(error)
    res.status(400).send({ error: 'malformatted id or token' })
  }
})

matchesRouter.post('/', async (req, res, next) => {
  try {
    const decodedToken = jwt.verify(req.token, process.env.SECRET)

    if(!req.token || !decodedToken.id) {
      return res.status(401).json({ error: 'token missing or invalid' })
    }

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

    if(savedMatch) {
      res.status(201).json(savedMatch.toJSON())
    } else {
      res.status(404).end()
    }
  } catch(error) {
    next(error)
  }
})

module.exports = matchesRouter
