const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Image = new Schema(
  {
    URL: { type: String, required: true },
  },
  { timestamps: true }
)
module.exports = mongoose.model("Images", Image)
