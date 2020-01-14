require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const gamesRouter = require('./controllers/gamesRouter')
const matchesRouter = require('./controllers/matchesRouter')
const playersRouter = require('./controllers/playersRouter')
const mongoose = require('mongoose')

let MONGODB_URI = process.env.MONGODB_URI

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('build'))
app.use('/api/games', gamesRouter)
app.use('/api/matches', matchesRouter)
app.use('/api/players', playersRouter)

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
  .then(result => {
    console.log("connected to mongodb")
  })
  .catch(error => {
    console.log("error connecting to mongodb", error.message)
  })

app.get('/', (req, res) => {
  res.send('<h1>backend is running</h1>')
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})