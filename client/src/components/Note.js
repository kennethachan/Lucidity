import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import NoteText from "./NoteText"
import add from "../buttons/add.png"

const URL = "http://localhost:3001"

function Note(props) {
  const [text, setText] = useState("")
  const [note, setNote] = useState([])
  const [update, setUpdate] = useState("")

  useEffect(() => {
    getNotes()
  }, [])

  //Notes are mapped onload using useEffect.  Function is used inside all other functions below to remap after any update is made.
  const getNotes = async () => {
    const res = await axios.get(`${URL}/get-note`)
    setNote(res.data.notes)
  }
  //A note is selected by Id and deleted, page is updated using getNotes
  const deleteText = async (_id) => {
    const res = await axios
      .delete(`${URL}/delete-note/${_id}`)
      .then((_res) => getNotes())
      .catch((error) => console.log(error))
  }

  //A note is selected by Id and updated, page is updated using getNotes.  See NoteText component
  const updateText = async (_id, text) => {
    const res = await axios
      .put(`${URL}/update-note/${_id}`, { text })
      .then((_res) => getNotes())
      .catch((error) => console.log(error))
  }

  //A note is added by grabbing the input value and setting it, text ecapsulate the request body that we are parsing
  //Text state is reset and page is updated by call getNotes
  const addText = async () => {
    const res = await axios
      .post(`${URL}/add-note/`, { text })
      .then((res) => {
        console.log(res.data)
        setText("")
        getNotes()
      })
      .catch((error) => console.log(error))
  }

  return (
    <div className="note-wrapper">
      <h3 className="write">write it down</h3>
      <img onClick={addText} className="add" src={add}></img>
      <input
        className="input-text"
        placeholder={"w r i t e  h e r e"}
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
                remove={() => deleteText(text._id)} //remove will trigger delete function with text's state id as the parameter.  see NoteText
                update={(updatedText) => updateText(text._id, updatedText)} //update will trigger the update function with text's state id and input value. See NoteText
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Note
