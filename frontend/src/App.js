import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Landing from "./pages/Landing"

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
