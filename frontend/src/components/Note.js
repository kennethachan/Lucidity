import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"

const URL = "http://localhost:3001"

function Note(props) {
  const [note, setNote] = useState([])
  const [newNote, setNewNote] = useState("")

  useEffect(() => {
    const getNotes = async () => {
      const res = await axios.get(`${URL}/notes`)
      console.log(res)
      setNote(res.data)
    }
    getNotes()
  }, [])

  return (
    <div className="note-wrapper">
      <h3>write it down</h3>
      <div className="note-container">
        <div className="note">
          <div className="checkbox"></div>
          <div className="text">wowowowow</div>
          <div className="remove-note">X</div>
        </div>
      </div>
    </div>
  )
}

export default Note
