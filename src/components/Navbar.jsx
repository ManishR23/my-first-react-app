import React, { useState } from "react";
import { Link, UNSAFE_FrameworkContext } from 'react-router-dom';

import "./Navbar.css";

function Navbar() {
    const [dropdown, setDropdown] = useState(false);

    return (
        <section id="navbar" className="navbar">
          <h1 className="nav-logo">Manish Rangan</h1>
        
          <div className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li 
              className="dropdown"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <span className="dropdown-title">Startups</span>
              {dropdown && (
                <div className="dropdown-menu">
                  <li><Link to="/uvset">UVSET</Link></li>
                  <li><Link to="/clink">Clink</Link></li>
                </div>
              )}

            </li>


            <li><Link to="/contact">Contact</Link></li>
          </div>
        </section>
    )
}

export default Navbar;