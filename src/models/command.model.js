const mongoose = require('mongoose')

const commandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  identifier: {
    type: String,
    trim: true,
    unique: true
  }
}, {
  timestamps: true
})

const Command = mongoose.model('Command', commandSchema)

module.exports = Command
