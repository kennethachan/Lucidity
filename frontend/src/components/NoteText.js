import React from "react"
import { useState, createRef } from "react"
import editButton from "../buttons/edit.png"
import deleteButton from "../buttons/delete.png"
import saveButton from "../buttons/save.png"
export default function NoteText({ text, remove, update }) {
  const [edit, setEdit] = useState(false)

  const input = createRef()

  const saveText = () => {
    update(input.current.value)
    setEdit(false)
  }

  return (
    <div className="item">
      {edit ? (
        <>
          <input defaultValue={text} className="edit-text" ref={input} />
          <div className="icons">
            <img src={saveButton} className="save" onClick={saveText}></img>
          </div>
        </>
      ) : (
        <>
          <div className="text">{text}</div>
          <div className="icons">
            <img
              src={editButton}
              className="edit"
              onClick={() => setEdit(true)}
            ></img>
          </div>
        </>
      )}

      <img src={deleteButton} className="delete" onClick={remove}></img>
    </div>
  )
}
