const jwt = require('jsonwebtoken')

const USERNAME = process.env.USERNAME || 'testuser'
const PASSWORD = process.env.PASSWORD || 'testpass'
const TOKEN_SECRET = process.env.TOKEN_SECRET || 'testsecret'

/**
 * Validate incoming request with basic auth
 */
function validateBasicAuth (req, res, next) {
  const header = req.get('Authorization')
  if (!header) {
    return res.status(400).send('Missing \'Authorization\' header')
  }

  // decode username & password
  let user, pass
  try {
    const userPassEncoded = header.split(/\s+/).pop()
    const userPass = new Buffer.from(userPassEncoded, 'base64').toString()
    user = userPass.split(/:/)[0]
    pass = userPass.split(/:/)[1]
  } catch (err) {
    return res.status(400).send('Malformed \'Authorization\' header')
  }

  if (
    user !== USERNAME ||
    pass !== PASSWORD
  ) {
    return res.status(401).send('Unauthorized')
  }

  next()
}

/**
 * Validate incoming request with JWT
 */
function validateToken (req, res, next) {
  const header = req.get('Authorization')
  if (!header) {
    return res.status(400).send('Missing \'Authorization\' header')
  }

  const token = header.split(/\s+/).pop()

  try {
    jwt.verify(token, TOKEN_SECRET)
  } catch (err) {
    return res.status(401).send('Unauthorized')
  }

  next()
}

/**
 * Generate JWT for client
 */
function generateToken () {
  return jwt.sign({}, TOKEN_SECRET, { expiresIn: '10m' })
}

module.exports = {
  validateBasicAuth,
  validateToken,
  generateToken
}