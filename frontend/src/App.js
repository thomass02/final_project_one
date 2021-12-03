
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {useDispatch, useSelector } from "react-redux";
import CartScreen from './Screens/CartScreen';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import { Link } from 'react-router-dom';
import SelectScreen from './Screens/SelectScreen';
import Homescreen2 from './Screens/HomeScreen2';
import HomeScreenTest from './Screens/HomeScreenTest';
import About from './Screens/AboutScreen';
import SigninScreen from './Screens/SigninScreen';
import { signout } from './actions/userActions';

function App() {

  /* get cart object via "selector" method for cart item persistance */
  const cart = useSelector((state) => state.cart);
  const {cartItems} = cart; 

  /* get user via "selector" method for signin persistance */
  const userSignin = useSelector((state) => state.userSignin);
  const {userData} = userSignin;

  /* define dispatch */
  const dispatch = useDispatch();

  /* call signout function via dispatch */
  const signoutHandler = () => {

    /* signout user */
    dispatch(signout());

  }

  return (
    
  <Router>
    
  <div className="grid-contianer">
      <header className="row">
          <div>
              <Link className="brand" to="/">EZ Tech Advisor</Link>
          </div>
          <div>
              <Link to="/cart">Cart
                {cartItems.length > 0 && (<span className="badge">{cartItems.length}</span>)}
              </Link>

              {/* If user data is available, get the name to display on signin header */}
              {
                userData ? (
                  
                  /* signout  */
                  <div className="dropdown">
                    <Link to="#">{userData.name} <i className="fa fa-caret-down"></i> {' '}</Link>
                    <ul className="dropdown-content">
                      <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
                    </ul>
                  </div>

                ) :

              /* user info is not availiable - show signin link */
                (
                  <Link to="/signin">Sign In</Link>
                )
              }

              
          </div>
      </header>

      <main>
        
          <Route exact path = "/" component = {HomeScreen} ></Route>
          <Route path = "/product/:id" component = {ProductScreen} ></Route>
          <Route path = "/cart/:id?" component = {CartScreen} ></Route>
          <Route path = "/selectScreen" component = {SelectScreen} ></Route>
          <Route path = "/homeScreen2" component = {Homescreen2} ></Route>
          <Route path = "/homeScreenTest" component = {HomeScreenTest} ></Route>
          <Route path = "/about" component = {About} ></Route>
          <Route path = "/signin" component = {SigninScreen}></Route>

      </main>

    <footer className = "row center" >All rights resereved - copyright Josh Thomas 2021</footer>

  </div>

  </Router>

  );
}

export default App;
