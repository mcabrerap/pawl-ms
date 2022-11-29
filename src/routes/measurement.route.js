const express = require('express')
const log = require('../services/logger.service')

const router = new express.Router()

router.post('/', async (req, res) => {
  log.info('POST /pawl/v1/api/measurement')
  const { body } = req
  log.info(JSON.stringify(body))
  res.status(201).send('OK')
})

module.exports = router
