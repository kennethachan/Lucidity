import React from "react"
import { Link } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Landing(props) {
  const image = require("../gifs/mirror.gif")
  const URL = "http://localhost:3001"
  let navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [changePage, setChangePage] = useState(false)

  const login = async (e) => {
    e.preventDefault()
    const res = await axios
      .get(`${URL}/get-users/${email}-${password}`)
      .then((res) => {
        console.log(res.data.users.email)
        if (
          email === res.data.users.email &&
          password === res.data.users.password
        ) {
          setEmail("")
          setPassword("")
          navigate("/")
        } else {
          alert("Incorrect email or password")
        }
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
          <button className="login-btn">Login</button>
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
