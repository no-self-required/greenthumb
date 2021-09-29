import { useContext } from 'react';
import { authContext } from './components/Providers/AuthProvider';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import useApplicationData from './useApplicationData';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Products from './components/Products/Products';
import Navbar from './components/Navbar';
import Login from './components/Login/Login';
import Shops from './components/Shops/Shops';
import Idea from './components/Post/Post';
import './App.scss';


const App = () => {
  const {
      state,
      dispatch
  } = useApplicationData();
    const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
  ));

  //login
  const { auth,user,logout } = useContext(authContext);
  
  return (
    <div className="App" >
      <Router>
        <div>
          <Navbar 
            auth={auth}
            user={user}
            logout={logout}
          />

          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </nav> */}

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/shops">
              <Shops />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              {!auth && <Login />}
              {auth && <Home />}
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
