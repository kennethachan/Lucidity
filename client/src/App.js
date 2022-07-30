import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Landing from "./pages/Landing"
import Register from "./pages/Register"

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
