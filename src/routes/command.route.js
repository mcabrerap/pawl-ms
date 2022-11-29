const express = require('express')
const log = require('../services/logger.service')

const router = new express.Router()

router.get('/', async (req, res) => {
  log.info('GET /pawl/v1/api/command')
  res.status(200).send('START_MEASUREMENT1')
})

module.exports = router
