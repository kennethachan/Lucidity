import React from "react"

function Login(props) {
  return (
    <div>
      <h1>Lucidity</h1>
      <div className="loginContainer">
        <h2>Please Login</h2>
        <input type="text" placeholder="Email"></input>
        <input type="text" placeholder="Password"></input>
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  )
}

export default Login
