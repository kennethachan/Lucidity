import React from "react"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

function Register(props) {
  const image = require("../gifs/shoe.gif") //background image
  const URL =
    process.env.NODE_ENV == "production"
      ? "https://lucidity-productivity.herokuapp.com"
      : "http://localhost:3001"
  let navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [changePage, setChangePage] = useState(false) //Will trigger navigate when true

  //When user submits email and password, page is redirected back to the login page
  //If duplicate email exists send an alert
  const register = async (e) => {
    e.preventDefault()
    try {
      const res = await axios
        .post(`${URL}/new-user`, { email, password })
        .then((res) => {
          setChangePage(true)
          setEmail("")
          setPassword("")
          navigate("/")
        })
      if (changePage) {
        navigate("/")
      }
    } catch (error) {
      alert("Email already exists")
      setChangePage(false)
    }
  }

  //Form is used to grab values of email and password input when submitted with a button and triggers register function
  return (
    <div className="landing-background">
      <div className="register-header">
        <h1 className="landing-logo">Lucidity</h1>
        <Link className="nav" to="/">
          back to login
        </Link>
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
