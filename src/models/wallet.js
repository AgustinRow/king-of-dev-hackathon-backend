import mongoose from 'mongoose';
const { Schema } = mongoose;

const addressRegex = /^0x[a-fA-F0-9]{40}$/;

const validateAddress = (address) => addressRegex.test(address);

const walletAddress = new Schema({
  address: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validateAddress,
      message: 'provided address is invalid',
    },
    match: [addressRegex, 'provided address is invalid'],
  },
});

export const WalletAddressModel = mongoose.model(
  'WalletAddress',
  walletAddress,
);
