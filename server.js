// const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')

const rootRoutes = require('./routes/root')
const profileRoutes = require('./routes/profile')
const homeRoutes = require('./routes/home')

const server = express()

server.engine('hbs', hbs({
  extname: 'hbs'
}))

server.set('view engine', 'hbs')

server.use(bodyParser.urlencoded({extended: false}))
server.use(express.static('public'))

server.use('/', rootRoutes)

server.use('/home', homeRoutes)

module.exports = server
