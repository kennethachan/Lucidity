import React from "react"
import { useState, createRef } from "react"

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
            <button className="save" onClick={saveText}>
              save
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="text">{text}</div>
          <div className="icons">
            <button className="edit" onClick={() => setEdit(true)}>
              edit
            </button>
          </div>
        </>
      )}

      <button className="delete" onClick={remove}>
        X
      </button>
    </div>
  )
}
