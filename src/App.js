import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Cart from "./Cart";
import './App.css';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [{user}, dispatch] = useStateValue();

  //useEffect
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //logged in
        dispatch({
          type: "set_user",
          user: authUser
        })
      } else {
        //logged out
        dispatch({
          type: 'set_User',
          user: null
        })
      }
    });

    return() => {
      //any cleanup
      unsubscribe();
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(user);

  return (
    <Router>
      <div className="app">
        <Routes>
        
          <Route path="/" element={
            <Home />
          }/>

          <Route path="/about" element={
            <About />
          }/>

          <Route path="/login" element={
            <Login />
          }/>

          <Route path="/cart" element={
            <Cart />
          }/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
