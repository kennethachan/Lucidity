import React from "react"
import { Link } from "react-router-dom"

function Header(props) {
  return (
    <div className="App-header">
      <h1 className="logo">Lucidity</h1>
      <div>
        {
          <Link className="nav" to="/">
            home
          </Link>
        }
        <Link className="nav" to="/landing">
          front page
        </Link>
      </div>
    </div>
  )
}

export default Header
