import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"

const URL = "http://localhost:3001"

function Note(props) {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("")

  useEffect(() => {
    const getNotes = async () => {
      const res = await axios.get(`${URL}/notes`)
      console.log(res)
      setNotes(res.data)
    }
    getNotes()
  }, [])

  useEffect(() => {
    const noteComplete = async () => {
      const res = await axios.put(`${URL}/notes/done/62db6ef0537aad6b0cb4765c`)
      console.log(res)
      //   .then((res) => res.json())
      // setNotes((notes) =>
      //   notes.map((notez) => {
      //     if (notez._id === res._id) {
      //       notez.complete = res.complete
      //     }
      //     return notez
      //   })
      // )
    }
    noteComplete()
  }, [])

  return (
    <div className="note-wrapper">
      <h3>write it down</h3>
      <div className="note-container">
        {notes.map((notez) => (
          <div
            className={"note" + (notez.complete ? "is-complete" : "")}
            key={notez._id}
            // onClick={() => noteComplete(notez._id)}
          >
            <div className="checkbox"> Check</div>
            <div className="text">{notez.text}</div>
            <div className="remove-note">X</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Note
