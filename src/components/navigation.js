import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import '../bootstrap.min.css';
import '../index.css';

function Navigation() {
    return(
        <nav className="navbar navbar-expand-lg sticky-top bg-white">
            <div className="container">
            {/* ========= Brand ========== */}
                <Link to="/" className="navbar-brand text-dark"><h2>myteam</h2></Link>
            {/* ========= Brand End========== */}
            
            {/* ========================= Toggler ============================== */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><i className="fa fa-bars"></i></span>
            </button>
            {/* ========================= End Toggler ============================== */}
           
            {/* ========================= Collapse ============================== */}

            <div className="collapse navbar-collapse" id="navbarCollapse">

            {/* ========================= Toggler ============================== */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fe fe-x"></i>
            </button>

            {/* ========================= Navigation ============================== */}
                <ul className="navbar-nav ml-auto justify-content-between text-uppercase">
                    <li className="nav-item dropdown">
                        <Link  to="/" className="navbar-btn btn btn-md" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item ">
                        <Link to="/about" className="navbar-btn btn btn-md">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="navbar-btn btn btn-md">Contact</Link>
                    </li>
                </ul>
            {/* ========================= End Navigation ============================== */}
            </div>
            </div>
        </nav>
    );
}

export default Navigation;