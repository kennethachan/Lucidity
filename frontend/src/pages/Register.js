import React from "react"
import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Register(props) {
  const image = require("../gifs/shoe.gif")
  const URL = "http://localhost:3001"
  let navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [changePage, setChangePage] = useState(false)

  const register = async (e) => {
    e.preventDefault()

    try {
      const res = await axios
        .post(`${URL}/new-user`, { email, password })
        .then((res) => {
          setChangePage(true)
          setEmail("")
          setPassword("")
          navigate("/landing")
        })
      if (changePage) {
        navigate("/landing")
      }
    } catch (error) {
      alert("Email already exists")
      setChangePage(false)
    }
  }

  return (
    <div className="landing-background">
      <div className="App-header">
        <h1 className="landing-logo">Lucidity</h1>
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
