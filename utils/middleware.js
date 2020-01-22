// const jwt = require('jsonwebtoken')

const tokenExtractor = (request, response, next) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    request.token = authorization.substring(7)
  }

  next()
}

// const tokenVerifier = (request, response, next) => {
//   const decodedToken = jwt.verify(request.token, process.env.SECRET)

//   if(!request.token || !decodedToken.id) {
//     return response.status(401).json({ error: 'token missing or invalid' })
//   }

//   next()
// }

module.exports = { tokenExtractor }