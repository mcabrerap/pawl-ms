const express = require('express')

const app = express()

const commandRoute = require('./command.route')
const measurementRoute = require('./measurement.route')
const pawlLoggerRoute = require('./pawl-logger.route')

app.use('/pawl/v1/api/command', commandRoute)
app.use('/pawl/v1/api/measurement', measurementRoute)
app.use('/pawl/v1/api/pawl-logger', pawlLoggerRoute)

module.exports = app
