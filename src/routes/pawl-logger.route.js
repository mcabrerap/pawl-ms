const nodeplotlib = require('nodeplotlib')
const express = require('express')
const log = require('../services/logger.service')

const router = new express.Router()

router.post('/', async (req, res) => {
  const { body } = req
  log.info(body.info)
  res.status(201).send(body)
})

router.get('/', async (req, res) => {
  const plotData = [
    {
      // x: [0.017333984375, -0.0028076171875, -0.0156982421875, -0.0076416015625, -0.00361328125, 0.00283203125, 0.00283203125, 0.0133056640625, 0.0125, 0.0125, 0.01572265625, 0.014111328125, 0.01572265625, 0.014111328125, 0.014111328125, 0.0197509765625, 0.0165283203125, 0.01572265625, 0.0197509765625, 0.0116943359375, 0.017333984375, 0.0165283203125, 0.020556640625, 0.0181396484375, 0.0197509765625, 0.01572265625, 0.017333984375, 0.0181396484375, 0.0245849609375, 0.01572265625, 0.5369873046875, 0.039892578125, 0.025390625, 0.0165283203125, 0.017333984375, 0.01572265625, 0.0125, 0.0100830078125, 0.01572265625, 0.004443359375, 0.0052490234375, 0.0125, 0.00283203125, 0.007666015625, 0.00283203125, 0.0068603515625, 0.0052490234375, 0.00927734375, 0.0100830078125, 0.0084716796875, 0.0068603515625, 0.00927734375, 0.00283203125, 0.010888671875, 0.0100830078125, 0.0165283203125, 0.00927734375, 0.0125, 0.0165283203125, 0.0165283203125, 0.017333984375, 0.014111328125, 0.0213623046875, 0.0245849609375, 0.0229736328125, 0.0229736328125, 0.025390625, 0.0245849609375, 0.025390625, 0.0229736328125, 0.02216796875, 0.0189453125, 0.0213623046875, 0.023779296875, 0.0004150390625, 0.0116943359375, 0.0116943359375, 0.0060546875, 0.01572265625, 0.01572265625, 0.0060546875, 0.0068603515625, 0.007666015625, 0.0060546875, -0.0011962890625, -0.0011962890625, 0.0036376953125, 0.0133056640625, 0.0060546875, 0.0036376953125, 0.0060546875, -0.0076416015625, 0.004443359375, 0.0060546875, 0.0060546875, 0.00283203125, 0.004443359375, 0.0100830078125, 0.0036376953125, 0.0133056640625, 0.01572265625, 0.0133056640625],
      // y: [-0.0008056640625, 0.0153076171875, 0.0314208984375, 0.0475341796875, 0.0636474609375, 0.0797607421875, 0.0958740234375, 0.1119873046875, 0.1281005859375, 0.1442138671875, 0.1603271484375, 0.1764404296875, 0.1925537109375, 0.2086669921875, 0.2247802734375, 0.2408935546875, 0.2570068359375, 0.2731201171875, 0.2892333984375, 0.3053466796875, 0.3214599609375, 0.3375732421875, 0.3536865234375, 0.36416015625, 0.348046875, 0.33193359375, 0.3158203125, 0.29970703125, 0.28359375, 0.26748046875, -0.6251953125, 0.23525390625, 0.219140625, 0.20302734375, 0.1869140625, 0.17080078125, 0.1546875, 0.13857421875, 0.1224609375, 0.10634765625, 0.090234375, 0.07412109375, 0.0580078125, 0.04189453125, 0.02578125, 0.00966796875, -0.0064453125, -0.02255859375, -0.038671875, -0.05478515625, -0.0708984375, -0.08701171875, -0.3609375, -0.34482421875, -0.3287109375, -0.31259765625, -0.296484375, -0.28037109375, -0.2642578125, -0.24814453125, -0.23203125, -0.21591796875, -0.1998046875, -0.18369140625, -0.167578125, -0.15146484375, -0.1353515625, -0.11923828125, -0.103125, -0.08701171875, -0.0708984375, -0.05478515625, -0.038671875, -0.02255859375, -0.103125, -0.11923828125, -0.1353515625, -0.15146484375, -0.167578125, -0.18369140625, -0.1998046875, -0.21591796875, -0.23203125, -0.24814453125, -0.2642578125, -0.28037109375, -0.296484375, -0.31259765625, -0.3287109375, -0.34482421875, -0.3609375, -0.37705078125, -0.3931640625, -0.40927734375, -0.425390625, -0.44150390625, -0.425390625, -0.40927734375, -0.3931640625, -0.37705078125, -0.3609375, -0.34482421875],
      // good
      x: [-0.0008056640625, 0.0491455078125, 0.0990966796875, 0.1490478515625, 0.1989990234375, 0.2489501953125, 0.2989013671875, 0.3488525390625, 0.3988037109375, 0.4487548828125, 0.4987060546875, 0.5486572265625, 0.5986083984375, 0.6485595703125, 0.6985107421875, 0.6485595703125, 0.5986083984375, 0.5486572265625, 0.4987060546875, 0.4487548828125, 0.3988037109375, 0.3488525390625, 0.2989013671875, 0.2489501953125, 0.1989990234375, 0.1490478515625, 0.0990966796875, 0.0491455078125, -0.0008056640625, -0.0507568359375, -0.1007080078125, -0.1506591796875, -0.2006103515625, -0.2505615234375, -0.3005126953125, -0.3504638671875, -0.4004150390625, -0.4503662109375, -0.5003173828125, -0.5502685546875, -0.6002197265625, -0.6501708984375, -0.7001220703125, -0.700927734375, -0.6509765625, -0.601025390625, -0.55107421875, -0.501123046875, -0.451171875, -0.401220703125, -0.35126953125, -0.301318359375, -0.2513671875, -0.201416015625, -0.15146484375, -0.101513671875, -0.0515625, -0.001611328125, 0.04833984375, 0.098291015625, 0.1482421875, 0.198193359375, 0.24814453125, 0.298095703125, 0.348046875, 0.397998046875, 0.44794921875, 0.497900390625, 0.5478515625, 0.597802734375, 0.64775390625, 0.697705078125, 0.6985107421875, 0.6485595703125, 0.5986083984375, 0.5486572265625, 0.4987060546875, 0.4487548828125, 0.3988037109375, 0.3488525390625, 0.2989013671875, 0.2489501953125, 0.1989990234375, 0.1490478515625, 0.0990966796875, 0.0491455078125, -0.0008056640625, -0.0507568359375, -0.1007080078125, -0.1506591796875, -0.2006103515625, -0.2505615234375, -0.3005126953125, -0.3504638671875, -0.4004150390625, -0.4503662109375, -0.5003173828125, -0.5502685546875, -0.6002197265625, -0.6501708984375, -0.7001220703125, -0.700927734375, -0.6509765625, -0.601025390625, -0.55107421875, -0.501123046875, -0.451171875, -0.401220703125, -0.35126953125, -0.301318359375, -0.2513671875, -0.201416015625, -0.15146484375, -0.101513671875, -0.0515625, -0.001611328125],
      y: [0.013305664, -0.010864258, -0.014086914, -0.003613281, 0.005249023, 0.010888672, 0.014916992, 0.018139648, 0.019750977, 0.020556641, 0.019750977, 0.018945313, 0.018139648, 0.017333984, 0.01652832, 0.017333984, 0.015722656, 0.015722656, 0.015722656, 0.015722656, 0.0125, 0.010888672, 0.009277344, 0.00847168, 0.006860352, 0.005249023, 0.002832031, 0.002026367, 0.000415039, -0.001196289, -0.002807617, -0.005224609, -0.006835938, -0.00925293, -0.012475586, -0.014892578, -0.01730957, -0.018920898, -0.019726562, -0.020532227, -0.019726562, -0.020532227, -0.018920898, -0.018920898, -0.019726562, -0.018920898, -0.018920898, -0.01328125, -0.005224609, 0.001220703, 0.007666016, 0.011694336, 0.01652832, 0.019750977, 0.022973633, 0.025390625, 0.028613281, 0.031835938, 0.03425293, 0.035058594, 0.037475586, 0.037475586, 0.035864258, 0.035058594, 0.033447266, 0.031835938, 0.031030273, 0.029418945, 0.028613281, 0.027001953, 0.026196289, 0.024584961, 0.024584961, 0.022973633, 0.022973633, 0.022167969, 0.022167969, 0.021362305, 0.020556641, 0.020556641, 0.019750977, 0.015722656, 0.0125, 0.010888672, 0.00847168, 0.006860352, 0.004443359, 0.002026367, -0.000390625, -0.002807617, -0.005224609, -0.006835938, -0.00925293, -0.012475586, -0.014892578, -0.018115234, -0.021337891, -0.022143555, -0.022143555, -0.022143555, -0.022143555, -0.021337891, -0.020532227, -0.019726562, -0.018920898, -0.010058594, -0.002001953, 0.004443359, 0.011694336, 0.01652832, 0.020556641, 0.024584961, 0.028613281, 0.031030273, 0.033447266, 0.035864258],
      type: 'scatter'
    }
  ]

  nodeplotlib.plot(plotData)
  res.status(201).send({})
})

module.exports = router
