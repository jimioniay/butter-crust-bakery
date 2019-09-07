const mongoose = require('mongoose');

const BankSchema = new mongoose.Schema({
  bank_name: {
    type: String,
    required: true,
  },
  bank_code: {
    type: String,
    required: true,
  },
});

const BeneficiarySchema = new mongoose.Schema({
  beneficiary_name: {
    type: String,
    required: true,
  },
  beneficary_account: {
    type: Number,
    required: true,
  },
  beneficiary_bank: {
    type: { BankSchema },
    required: true,
  },
  recipient_code: {
    type: String,
    required: false,
  },
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  beneficiaries: {
    type: [BeneficiarySchema],
    default: [],
  },
});

module.exports = mongoose.model('User', UserSchema);
