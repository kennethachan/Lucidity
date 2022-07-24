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
          <input defaultValue={text} className="text" ref={input} />
          <div className="icons">
            <button className="" onClick={saveText}>
              SAVE
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="text">{text}</div>
          <div className="icons">
            <button className="" onClick={() => setEdit(true)}>
              EDIT
            </button>
          </div>
        </>
      )}

      <button className="" onClick={remove}>
        REMOVE
      </button>
    </div>
  )
}
