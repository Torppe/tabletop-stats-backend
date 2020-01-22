const config = require('./utils/config')
const express = require('express')
const helmet = require('helmet')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const middleware = require('./utils/middleware')
const gamesRouter = require('./controllers/gamesRouter')
const matchesRouter = require('./controllers/matchesRouter')
const playersRouter = require('./controllers/playersRouter')
const usersRouter = require('./controllers/usersRouter')
const loginRouter = require('./controllers/loginRouter')

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(result => {
    console.log('connected to mongodb')
  })
  .catch(error => {
    console.log('error connecting to mongodb', error.message)
  })

app.use(bodyParser.json())
app.use(cors())
app.use(helmet())
app.use(express.static('build'))
app.use(middleware.tokenExtractor)
app.use('/api/games', gamesRouter)
app.use('/api/matches', matchesRouter)
app.use('/api/players', playersRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

app.get('/', (req, res) => {
  res.send('<h1>backend is running</h1>')
})

module.exports = app