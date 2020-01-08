const matchesRouter = require('express').Router()
let matches = [
  {
    id: 1,
    gameId: 2,
    players: [
      {
        id: 1,
        player: 'Tuomas',
        points: 5
      },
      {
        _id: 2,
        player: 'Maiju',
        points: 4
      }
    ]
  },
  {
    id: 2,
    gameId: 1,
    players: [
      {
        id: 1,
        player: 'Tuomas',
        points: 1
      },
      {
        id: 2,
        player: 'Maiju',
        points: 3
      }
    ]
  }
]

matchesRouter.get('/', (req, res) => {
  res.json(matches)
})

matchesRouter.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  const match = matches.find(m => m.id === id)

  if(match) {
    res.json(match)
  } else {
    res.status(404).end()
  }
})

matchesRouter.get('/game/:id', (req, res) => {
  const id = Number(req.params.id)
  const matchesByGame = matches.filter(m => m.gameId === id)

  if(matchesByGame && matchesByGame.length > 0) {
    res.json(matchesByGame)
  } else {
    res.status(404).end()
  }
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

  const match = {
    id: 1000,
    players: body.players
  }

  matches = matches.concat(match)
  res.json(match)
})

module.exports = matchesRouter
