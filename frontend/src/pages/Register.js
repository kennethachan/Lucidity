import React from "react"
import { Link } from "react-router-dom"
import { useState, useEffect, createRef, useContext } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import UserContext from "../components/UserContext"

function Register(props) {
  const image = require("../gifs/shoe.gif")
  const URL = "http://localhost:3001"
  const navigate = useNavigate()
  const ref = createRef()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const user = useContext(UserContext)

  const register = async (e) => {
    e.preventDefault()
    const res = await axios
      .post(`${URL}/new-user`, { email, password })
      .then((response) => {
        user.setEmail(response.cred.email)
        setEmail("")
        setPassword("")
      })
  }

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
        <form className="login-background" onSubmit={(e) => register(e)}>
          <h3 className="email">Email</h3>
          <input
            className="email-input"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />
          <h3 className="password">Password</h3>
          <input
            className="password-input"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br />
          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  )
}
export default Register
