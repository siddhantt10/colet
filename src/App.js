import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Signin from "./Signin";
import Cart from "./Cart";
import './App.css';

function App() {
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
            <Signin />
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
