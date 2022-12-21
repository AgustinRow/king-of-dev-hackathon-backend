import mongoose from 'mongoose';
const { Schema } = mongoose;

const addressRegex = /^0x[a-fA-F0-9]{40}$/;

const validateAddress = (address) => addressRegex.test(address);

const dataTravel = new Schema({
  address: {
    type: String,
    required: true,
    validate: {
      validator: validateAddress,
      message: 'provided address is invalid',
    },
    match: [addressRegex, 'provided address is invalid'],
  },
  travelCode: {
    type: String,
    required: true,
  },
  arrival: {
    type: Date,
  },
});

export const DataTravelModel = mongoose.model('DataTravel', dataTravel);
