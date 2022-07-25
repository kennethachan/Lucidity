import React from "react"
import { Link } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Landing(props) {
  const image = require("../gifs/mirror.gif")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [changePage, setChangePage] = useState(false)
  let navigate = useNavigate()

  //createContext is code sourced online
  const UserContext = React.createContext({})
  const user = useContext(UserContext)

  const login = async (e) => {
    e.preventDefault()
    const res = await axios
      .post(`${URL}/get-users`, { email, password })
      .then((response) => {
        user.setEmail(response.cred.email)
        setEmail("")
        setPassword("")
        setChangePage(true)
      })
  }

  return (
    <div className="landing-background">
      <div className="App-header">
        <h1 className="landing-logo">Lucidity</h1>
      </div>
      <div className="login-container">
        <img className="landing-image" src={image}></img>
        <form className="login-background" onSubmit={(e) => login(e)}>
          <h3 className="email">Email</h3>
          <input
            className="email-input"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>{" "}
          <br />
          <h3 className="password">Password</h3>
          <input
            className="password-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        </form>
      </div>
    </div>
  )
}

export default Landing
