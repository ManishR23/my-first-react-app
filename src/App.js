import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar'
import Home from  './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import UVSET from './components/UVSET'
import Clink from './components/Clink'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/uvset" element={<UVSET />}></Route>
          <Route path="/clink" element={<Clink />}></Route>
          <Route path="/contact" element={<Contact />}></Route>

        </Routes>
      

      </div>

    </Router>
  );
}

export default App;
