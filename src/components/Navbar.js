import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Ensure this is correctly importing your CSS file

function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeMenu = () => {
        setIsNavOpen(false);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid m-0 p-0">
                    <div className='col-sm-2 mt-2'>
                        <Link className="navbar-brand" to="/">
                            <img src={require("../img/logo.png")} className="float-end" style={{ width: "150px", height: "80px" }} alt="logo" />
                        </Link>
                    </div>

                    <button className="navbar-toggler" type="button" onClick={toggleNav}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={"collapse navbar-collapse stylish-menu" + (isNavOpen ? " show" : "")} id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li  className="nav-item">
                                <a className="nav-link"  href="/" onClick={closeMenu}>Home</a>
                            </li>
                            <li  className="nav-item">
                                <a className="nav-link" href="/about" onClick={closeMenu}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/application" onClick={closeMenu}>Application</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/" onClick={closeMenu}>Page4</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/" onClick={closeMenu}>Page5</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/" onClick={closeMenu}>Page6</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={closeMenu}>Page7</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-sm-2'></div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
