import logo from "./logo.svg"
import "./App.css"
import GIFs from "./components/GIFs"
import Header from "./components/Header"
import Audio from "./components/Audio"
import Note from "./components/Note"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="components">
        <Audio />
        <GIFs />
        <Note />
      </div>
    </div>
  )
}

export default App
