const mongoose = require("mongoose");

const etherumValidator = require("../middlewares/etherumAddressValidator.middlewares.js");

const { Schema } = mongoose;

const squadSchema = new Schema({
  name: { type: String, unique: true, required: [true, "Squad Name required"] },
  verified: { type: Boolean, required: false, default: false },
  description: {
    type: String,
    unique: false,
    required: [true, "Squad description required"],
  },
  inviteLink: {
    type: String,
    unique: false,
    required: [true, "Squad invite link is required"],
  },
  daoAddress: {
    type: String,
    unique: false,
    required: [true, "The DAO address required"],
  },
  signUpDate: { type: Date, default: Date.now() },
});
module.exports = mongoose.model("Squad", squadSchema);
