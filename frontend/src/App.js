import logo from "./logo.svg"
import "./App.css"
import GIFs from "./components/GIFs"
import Header from "./components/Header"
import Audio from "./components/Audio"
import Task from "./components/Task"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <h1 className="title">Lucidity</h1>
      <div className="headers">
        <h3>tunes</h3>

        <h3>checklist</h3>
      </div>
      <GIFs />
      <Audio />
    </div>
  )
}

export default App
