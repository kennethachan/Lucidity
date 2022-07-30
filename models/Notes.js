const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Note = new Schema(
  {
    text: { type: String, required: true },
  },
  { timestamps: true }
)
module.exports = mongoose.model("Notes", Note)
