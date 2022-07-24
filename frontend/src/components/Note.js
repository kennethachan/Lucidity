import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import NoteText from "./NoteText"

const URL = "http://localhost:3001"

function Note(props) {
  const [text, setText] = useState("")
  const [note, setNote] = useState([])
  const [update, setUpdate] = useState("")

  const getNotes = async () => {
    const res = await axios.get(`${URL}/get-note`)
    setNote(res.data.notes)
    console.log(res.data.notes)
  }

  useEffect(() => {
    getNotes()
  }, [])

  const deleteText = async (_id) => {
    const res = await axios
      .delete(`${URL}/delete-note/${_id}`)
      .then((_res) => getNotes())
      .catch((error) => console.log(error))
  }

  const updateText = async (_id, text) => {
    const res = await axios
      .put(`${URL}/update-note/${_id}`, { text })
      .then((_res) => getNotes())
      .catch((error) => console.log(error))
  }

  const addText = async () => {
    if (update === "") {
      const res = await axios
        .post(`${URL}/add-note/`, { text })
        .then((res) => {
          console.log(res.data)
          setText("")
          getNotes()
        })
        .catch((error) => console.log(error))
    } else {
      const res = await axios
        .post(`${URL}/add-note/`, { _id: update, text })
        .then((res) => {
          console.log(res.data)
          setText("")
          setUpdate("")
          getNotes()
        })
        .catch((error) => console.log(error))
    }
  }

  return (
    <div className="note-wrapper">
      <h3 className="write">w r i t e i t d o w n</h3>
      <button className="add" onClick={addText}>
        +
      </button>
      <input
        className="input-text"
        placeholder={"write here"}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <div className="note-container">
        <div className="notes">
          <div className="note-text">
            {note.map((text) => (
              <NoteText
                key={text._id}
                text={text.text}
                remove={() => deleteText(text._id)}
                update={(updatedText) => updateText(text._id, updatedText)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Note
