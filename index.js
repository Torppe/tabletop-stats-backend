const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const gamesRouter = require('./controllers/gamesRouter')
const matchesRouter = require('./controllers/matchesRouter')

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('build'))
app.use('/api/games', gamesRouter)
app.use('/api/matches', matchesRouter)

app.get('/', (req, res) => {
  res.send('<h1>backend is running</h1>')
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})