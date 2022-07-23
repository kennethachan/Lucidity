const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Note = new Schema(
  {
    text: { type: String, required: true },
    complete: { type: Boolean, default: false },
  },
  { timestamps: true }
)
module.exports = mongoose.model("Notes", Note)
