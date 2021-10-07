import { useState, useContext } from 'react';
import { authContext } from '../Providers/AuthProvider';
import "./Login.scss";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(authContext);

  const onEmailChange = function(event) {
    setEmail(event.target.value);
  };

  const onPasswordChange = function(event) {
    setPassword(event.target.value);
  };

  const onSubmit = function(event) {
    event.preventDefault();
    if (email)
      login(email, password);
  };

  return (
    <div className="login">
        <h1>Login</h1>
        <form className="form" onSubmit={onSubmit}>
            <div className="form__group">
                <input 
                  type="text" 
                  name="username"
                  className="form__input" 
                  value={email} 
                  placeholder="Enter Username"
                  onChange={onEmailChange}/>
            </div>

            <div className="form__group">
                <input 
                  type="password" 
                  name="password"
                  placeholder="Password" 
                  className="form__input"
                  value={password}
                  onChange={onPasswordChange}
                />
            </div>
            
            <button className="btn" type="submit" name="commit">Login</button>
        </form>
    </div>
  )
}

export default Login

