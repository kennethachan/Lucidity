import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Landing(props) {
  const image = require("../gifs/mirror.gif") //background image
  const URL = "http://localhost:3001"
  let navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [allData, setAllData] = useState([])

  //If email & password input value matches email and password in database pass, navigate to home page
  //If password does not match send an alert
  //input values are set in state and used to complete the URL to find user
  const login = async (e) => {
    e.preventDefault()
    const res = await axios.get(`${URL}/get-users/`).then((res) => {
      console.log(res.data.users)

      setAllData(res.data.users)

      const userEmail = allData.filter((data) => data.email === email)
      const userPassword = allData.filter((data) => data.password === password)

      console.log(userEmail[0].email)
      console.log(userPassword[0].password)

      if (
        email === userEmail[0].email &&
        password === userPassword[0].password
      ) {
        setEmail("")
        setPassword("")
        navigate("/home")
      } else {
        alert("Incorrect email or password")
      }
    })
  }

  //Form is used to grab values of email and password input when submitted with a button and triggers login function
  //If the user does not have an account they can click "register" which is linked to the register page
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
