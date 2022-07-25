import React from "react"
import { Link } from "react-router-dom"

function Header(props) {
  return (
    <div className="App-header">
      <h1 className="logo">Lucidity</h1>
      <Link className="nav" to="/">
        logout
      </Link>
    </div>
  )
}

export default Header
