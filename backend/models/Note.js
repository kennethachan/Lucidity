const mongoose = require("mongoose")
const Schema = mongoose.Schema

const NoteSchema = new Schema(
  {
    text: { type: String, required: true },
    complete: { type: String, default: false },
  },
  { timestamps: true }
)

module.exports = NoteSchema
