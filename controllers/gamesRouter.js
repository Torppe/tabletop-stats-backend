const gamesRouter = require('express').Router()
let games = [
  {
    id: 1,
    title: 'Terraforming mars'
  },
  {
    id: 2,
    title: 'Power grid'
  }
]

gamesRouter.get('/', (req, res) => {
  res.json(games)
})

gamesRouter.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  const game = games.find(g => g.id === id)

  if(game) {
    res.json(game)
  } else {
    res.status(404).end()
  }
})

gamesRouter.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  games = games.filter(j => j.id !== id)

  res.status(204).end()
})

gamesRouter.post('/', (req, res) => {
  const body = req.body

  if(!body.title) {
    return res.status(400).json({
      error: 'title missing'
    })
  }

  const game = {
    id: 1000,
    title: body.title
  }

  games = games.concat(game)
  res.json(game)
})

module.exports = gamesRouter
