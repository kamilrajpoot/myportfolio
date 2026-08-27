const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a certification title"],
      trim: true,
    },
    issuer: {
      type: String,
      required: [true, "Please add an issuer"],
      trim: true,
    },
    date: {
      type: String,
      required: [true, "Please add a date"],
    },
    idCode: {
      type: String,
      trim: true,
    },
    file: {
      type: String,
      required: [true, "Please add a file path or URL"],
    },
    type: {
      type: String,
      default: "certificate",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Certification", certificationSchema);
