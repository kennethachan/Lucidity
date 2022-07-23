import React from "react"

function Register(props) {
  return (
    <div>
      <h1>Lucidity</h1>
      <div className="loginContainer">
        <h2>Please Register</h2>
        <input type="text" placeholder="Email"></input>
        <input type="text" placeholder="Password"></input>
        <button>Register</button>
      </div>
    </div>
  )
}

export default Register
