const express = require('express')
const log = require('../services/logger.service')
const Measurement = require('../models/measurement.model')

const router = new express.Router()

router.get('/:identifier', async (req, res) => {
  const { identifier } = req.params
  const data = await Measurement.find({ identifier })
  const response = []
  data.forEach((item) => {
    response.push({
      x: item.voltage,
      y: item.current
    })
  })
  res.status(201).send(response)
})

module.exports = router
