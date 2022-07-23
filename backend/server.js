const express = require("express")
const cors = require("cors")
const logger = require("morgan")
const db = require("./db")
const Note = require("./models/Notes")
const Parser = require("body-parser")

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger("dev"))
app.use(Parser.json())

app.get("/", (req, res) => {
  res.json("This is root!")
})

app.get("/notes", async (req, res) => {
  const notes = await Note.find()
  res.json(notes)
})

app.post("/notes/new", (req, res) => {
  const note = new Note({
    text: req.body.text,
  })
  note.save()
  res.json(note)
})

app.delete("/notes/delete/:id", async (req, res) => {
  const deleteNote = await Note.findByIdAndDelete(req.params.id)
  res.json(deleteNote)
})

app.put("/notes/done/:id", async (req, res) => {
  const note = await Note.findById(req.params.id)
  note.done = !note.complete
  note.save()
  res.json(note)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
