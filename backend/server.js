const express = require("express")
const cors = require("cors")
const logger = require("morgan")
const db = require("./db")
const Note = require("./models/Notes")

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger("dev"))

app.get("/", (req, res) => {
  res.send("This is root!")
})

app.get("/notes", async (req, res) => {
  const notes = await Note.find()
  res.send(notes)
})

app.post("/notes/new", (req, res) => {
  const newNote = new Note({
    text: req.body.text,
  })
  newNote.save()
  res.json(newNote)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
