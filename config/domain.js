const {portNumber} = require('./port')
require('dotenv').config()

const domain = `localhost:${portNumber}` 
const webdomain = process.env.WEB_DOMAIN

module.exports = { domain, webdomain }