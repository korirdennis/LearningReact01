import React from 'react';
import logo from '../logo.svg';

function Navbar() {
    return (
        <nav>
            <img src={logo} className="App-logo" alt="logo" />
            <h3 className="nav-title">ReactFacts</h3>
            <h4 className="nav-text"> React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar
