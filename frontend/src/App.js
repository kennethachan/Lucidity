import logo from "./logo.svg"
import "./App.css"
import GIFs from "./components/GIFs"
import Header from "./components/Header"
import Audio from "./components/Audio"
import Note from "./components/Note"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
