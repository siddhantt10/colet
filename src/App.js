import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
        
          <Route path="/" element={
            <Home />
          }/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
