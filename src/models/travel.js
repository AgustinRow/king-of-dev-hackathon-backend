import mongoose from 'mongoose';
const { Schema } = mongoose;

const travel = new Schema({
  travelCode: {
    type: String,
    required: true,
    unique: true,
  },
  dateDeparture: {
    type: Date,
  },
  dateArrival: {
    type: Date,
  },
  origin: {
    type: String,
  },
  destiny: {
    type: String,
  },
});

export const TravelModel = mongoose.model('Travel', travel);
