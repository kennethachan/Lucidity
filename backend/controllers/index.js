const Notes = require("../models/Notes")
const Users = require("../models/Users")
const Images = require("../models/Images")

//Controller functions for notepad
const getNote = async (req, res) => {
  try {
    const notes = await Notes.find()
    return res.status(200).json({ notes })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addNote = async (req, res) => {
  try {
    const { text } = req.body
    const notes = await Notes.create({ text })
    return res.status(201).send("Note Updated!")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteNote = async (req, res) => {
  try {
    const deleted = await Notes.findByIdAndDelete(req.params.Id)
    if (deleted) {
      return res.status(200).send("Note deleted")
    }
    throw new Error("Note not found")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateNotes = async (req, res) => {
  try {
    const { text } = req.body
    const note = await Notes.findByIdAndUpdate(req.params.Id, { text })
    if (!note) {
      res.status(500).send("Note not found!")
    }
    return res.status(200).json(note)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

//Controller functions for login/register user
const getUser = async (req, res) => {
  try {
    const users = await Users.find()
    return res.status(200).json({ users })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const newUser = async (req, res) => {
  try {
    const { password, email } = req.body
    const users = await Users.create({ password, email })
    return res.status(201).send("User Added!")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

//Controller functions for user added GIFs
const newImage = async (req, res) => {
  try {
    const { URL } = req.body
    const images = await Images.create({ URL })
    return res.status(201).send("Image Added")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getImage = async (req, res) => {
  try {
    const images = await Images.find()
    return res.status(200).json({ images })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteImage = async (req, res) => {
  try {
    const deleteImg = await Images.findByIdAndDelete(req.params.Id)
    if (deleteImg) {
      return res.status(200).send("Image deleted")
    }
    throw new Error("Image not found")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getNote,
  addNote,
  deleteNote,
  updateNotes,
  getUser,
  newUser,
  newImage,
  getImage,
  deleteImage,
}
