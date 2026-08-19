const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
    title: { type: String, required: [true, "Title is required"], trim: true },
    client: { type: String, trim: true, default: "" },
    year: { type: String, trim: true, default: "SELECTED WORK" },
    category: { type: String, trim: true, default: "General", index: true },
    description: { type: String, required: [true, "Description is required"], trim: true },
    detail: { type: String, required: [true, "Detail is required"], trim: true },
    bullets: { type: [String], default: [] },
    tags: { type: [String], default: [] },
    serviceSlugs: { type: [String], default: [] },
    imageUrl: { type: String, trim: true, default: "" },
    liveUrl: { type: String, trim: true, default: "" },
    githubUrl: { type: String, trim: true, default: "" },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0, index: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
