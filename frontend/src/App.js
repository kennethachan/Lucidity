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

      <GIFs />
      <Audio />
    </div>
  )
}

export default App
