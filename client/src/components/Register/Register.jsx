import React from 'react'

function Register() {
  return (
  <div class="user">
      <h1>Register</h1>
      <form class="form">
          <div class="form__group">
              <input type="text" placeholder="Username" class="form__input" />
          </div>

          <div class="form__group">
              <input type="email" placeholder="Email" class="form__input" />
          </div>
          
          <div class="form__group">
              <input type="city" placeholder="City" class="form__input" />
          </div>

          <div class="form__group">
              <input type="twitter" placeholder="Twitter" class="form__input" />
          </div>

          <div class="form__group">
              <input type="facebook" placeholder="Facebook" class="form__input" />
          </div>

          <div class="form__group">
              <input type="password" placeholder="Password" class="form__input" />
          </div>
          
          <button class="btn" type="button">Register</button>
      </form>
  </div>
  )
}

export default Register


