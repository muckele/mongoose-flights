import mongoose from 'mongoose'


const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United', 'Delta'],
    required: true
  },
  aiport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'JFK'],
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    required: true,
    validate: {
      validator: function(value) {
        return value >= 10 && value <= 9999
      }
    },
  },
  departs: {
    type: Number,
    default: function() {
      return new Date().getFullYear()
    },
    min: 2024
  }
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}