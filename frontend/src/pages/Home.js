import React from "react"
import "../App.css"
import GIFs from "../components/GIFs"
import Header from "../components/Header"
import Audio from "../components/Audio"
import Note from "../components/Note"

function Home(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="components">
        <div className="notePad">
          <Note />
        </div>
        <div className="gif-audio">
          <GIFs />
          <Audio />
        </div>
      </div>
    </div>
  )
}

export default Home
