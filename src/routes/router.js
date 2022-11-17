const express = require('express')

const app = express()

const commandRoute = require('./command.route')

app.use('/pawl/v1/api/command', commandRoute)

module.exports = app
