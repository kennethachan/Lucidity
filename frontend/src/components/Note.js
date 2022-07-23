import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const URL = "http://localhost:3001"

function Note(props) {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("")
  const [input, setInput] = useState("")

  useEffect(() => {
    const getNotes = async () => {
      const res = await axios.get(`${URL}/notes`)
      console.log(res)
      setNotes(res.data)
    }
    getNotes()
  }, [])

  return (
    <div className="note-wrapper">
      <h3 className="write">write it down</h3>
      <button className="add">+</button>
      <input className="input-text" placeholder={"write here"}></input>
      <div className="note-container">
        {notes.map((notez) => (
          <div
            className={"note" + (notez.complete ? "is-complete" : "")}
            key={notez._id}
            // onClick={() => noteComplete(notez._id)}
          >
            <div className="text">{notez.text}</div>
            <button className="remove-note">X</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Note
