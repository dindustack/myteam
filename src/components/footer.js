import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import '../bootstrap.min.css';
import '../index.css';
import instagram from '../assets/social/instagram.svg';
import facebook from '../assets/social/facebook.svg';
import twitter from '../assets/social/twitter.svg';
import pinterest from '../assets/social/pinterest.svg';


function Footer() {
    return (
        <footer className="py-5 py-md-5 bg-gray-200">
        <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">

          {/* =========== Navbar ========== */}
            <Link to="/" className="navbar-brand text-dark"><h2>myteam</h2></Link>
            <p className='mb-2 text-muted mb-md-0'>A smart way to hire</p>
           
           {/* ================================== Socials ======================================== */}
           <ul className="list-unstyled list-inline list-social mb-5 mb-md-0">
                <li className="list-inline-item list-social-item mr-3">
                    <a href="action" className="text-decoration-none">
                        <img src={instagram} alt={instagram} className="list-social-icon" />
                    </a>
                </li>
                <li className="list-inline-item list-social-item mr-3">
                    <a href="action" className="text-decoration-none">
                            <img src={facebook} alt={facebook} className="list-social-icon" />
                    </a>
                </li>
                <li className="list-inline-item list-social-item mr-3">
                    <a href="action" className="text-decoration-none">
                            <img src={twitter} alt={twitter} className="list-social-icon" />
                    </a>
                </li>
                <li className="list-inline-item list-social-item mr-3">
                    <a href="action" className="text-decoration-none">
                        <img src={pinterest} alt={twitter} className="list-social-icon" />
                    </a>
                </li>
           </ul>
           </div>
           
           {/* ================================== Pages ======================================== */}
           <div className="col-6 col-md-4 col-lg-2"> 
                <h6 className="font-weight-bold text-uppercase">
                    Pages
                </h6>
                <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
                    <li className="nav-item mb-3">
                    <Link to="/" className="text-decoration-none text-muted">Home</Link>
                    </li>
                    <li className="nav-item mb-3">
                    <Link to="/about" className="text-decoration-none text-muted">About</Link>
                    </li>
                    <li className="nav-item mb-3">
                    <Link to="/contact" className="text-decoration-none text-muted">Contact</Link>
                    </li>
                </ul>
          </div>

           <div className="col-6 col-md-4 col-lg-2"> 
                <h6 className="font-weight-bold text-uppercase">
                    Pages
                </h6>
                <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
                    <li className="nav-item mb-3">
                    <Link to="/" className="text-decoration-none text-muted">Home</Link>
                    </li>
                    <li className="nav-item mb-3">
                    <Link to="/about" className="text-decoration-none text-muted">About</Link>
                    </li>
                    <li className="nav-item mb-3">
                    <Link to="/contact" className="text-decoration-none text-muted">Contact</Link>
                    </li>
                </ul>
          </div>
        </div>

        <div className="row align-items-center pt-5">
            <p className="text-muted text-center col-12">&copy; DiNDUKODES 2020</p>
          </div>
        </div>
      </footer>
    );
}

export default Footer;