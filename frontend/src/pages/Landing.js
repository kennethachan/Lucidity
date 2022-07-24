import React from "react"
import { Link } from "react-router-dom"

const image = require("../gifs/mirror.gif")

function Landing(props) {
  return (
    <div className="landing-background">
      <div className="App-header">
        <h1 className="logo">Lucidity</h1>
        <div>
          <Link className="nav" to="/landing">
            logout
          </Link>
          <Link className="nav" to="/">
            home
          </Link>
        </div>
      </div>
      <div className="login-container">
        <img className="landing-image" src={image}></img>
        <div className="login-background">
          <h3 className="email">Email</h3>
          <input
            className="email-input"
            type="email"
            placeholder="Email Address"
          ></input>{" "}
          <br />
          <h3 className="password">Password</h3>
          <input
            className="password-input"
            type="password"
            placeholder="Password"
          ></input>{" "}
          <br />
          <button className="login-btn">
            {" "}
            <Link className="login-btn" to="/">
              Login
            </Link>
          </button>
          <button className="register-btn">
            <Link className="register-btn" to="/register">
              Register
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Landing
