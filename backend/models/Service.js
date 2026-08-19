const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    index: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
    title: { type: String, required: [true, "Title is required"], trim: true },
    description: { type: String, required: [true, "Description is required"], trim: true },
    intro: { type: String, required: [true, "Intro is required"], trim: true },
    tags: { type: [String], default: [] },
    includes: { type: [String], default: [] },
    stack: { type: [String], default: [] },
    relatedProjectSlugs: { type: [String], default: [] },
    order: { type: Number, default: 0, index: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);
