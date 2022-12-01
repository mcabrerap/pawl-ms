const express = require('express')
const log = require('../services/logger.service')
const Command = require('../models/command.model')

const router = new express.Router()

router.get('/', async (req, res) => {
  log.info('GET /pawl/v1/api/command')
  try {
    const commands = await Command.findOne({})
    res.status(200).send(commands)
  } catch (error) {
    res.status(500).send(error)
  }
})

router.post('/', async (req, res) => {
  log.info('POST /pawl/v1/api/command')
  const { body } = req
  const command = new Command(body)
  try {
    await command.save()
    res.status(201).send(command)
  } catch (error) {
    log.error(error)
    res.status(400).send(error)
  }
})

router.put('/', async (req, res) => {
  log.info('PUT /pawl/v1/api/command')
  const { body } = req
  try {
    const response = await Command.update({}, body)
    res.status(201).send(response)
  } catch (error) {
    log.error(error)
    res.status(400).send(error)
  }
})

router.delete('/', async (req, res) => {
  log.info('DELETE /pawl/v1/api/command')
  try {
    await Command.deleteMany()
    res.status(200).send()
  } catch (error) {
    log.error(error)
    res.status(500).send(error)
  }
})

module.exports = router
