import React from 'react'
import "./Login.scss"

function Login() {
  return (
  <div class="user">
      <h1>Login</h1>
      <form class="form">
          <div class="form__group">
              <input type="text" placeholder="Username" class="form__input" />
          </div>

          <div class="form__group">
              <input type="password" placeholder="Password" class="form__input" />
          </div>
          
          <button class="btn" type="button">Login</button>
      </form>
  </div>
  )
}

export default Login