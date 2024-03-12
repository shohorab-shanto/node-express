const mongoose = require("mongoose");

const contractSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the name"],
    },
    email: {
      type: String,
      required: [true, "Please enter the email"],
    },
    phone: {
      type: String,
      required: [true, "Please enter the phone"],
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("Contracts", contractSchema);
