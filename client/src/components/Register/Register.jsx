import React, {setState} from 'react'

function Register() {
  return (
  <div className="user">
      <h1>Register</h1>
      <form className="form">
          <div className="form__group">
              <input 
                type="text" 
                id="username"
                placeholder="Username*" 
                className="form__input"
                required
                autoFocus
              />
          </div>

          <div className="form__group">
              <input 
                type="email" 
                id="email"
                placeholder="Email*" 
                className="form__input" 
                required  
              />
          </div>

          <div className="form__group">
              <input 
                type="password"
                id="password"
                placeholder="Password*" 
                className="form__input" 
                required
                />
          </div>

          <div className="form__group">
              <input 
                type="password" 
                id="password_confirm"
                placeholder="Confirm Password*" 
                className="form__input"
                required
              />
          </div>
          
          <div className="form__group">
              <input type="city" placeholder="City" className="form__input" />
          </div>

          <div className="form__group">
              <input type="twitter" placeholder="Twitter" className="form__input" />
          </div>

          <div className="form__group">
              <input type="facebook" placeholder="Facebook" className="form__input" />
          </div>

          
          
          <button className="btn" value="register" type="submit">Register</button>
      </form>
  </div>
  )
}

export default Register;


