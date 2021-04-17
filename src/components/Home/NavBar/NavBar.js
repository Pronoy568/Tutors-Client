import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';

const NavBar = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <div>
                <img style={{height: '100px',margin: '-8px 50px'}} src={logo} />
            </div>
            <div className="collapse navbar-collapse container-fluid">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                    <li className="nav-item active">
                        <Link className="nav-link me-5" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link me-5" to="/Services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link me-5" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link me-5" to="/review">Review</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link me-5" to="#">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link me-5" to="#">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link me-5" to="/login">Login</Link>
                    </li>
                    <li className="row">
                            <div className="col-md-4">
                                <img style={{ height:'50px',borderRadius:'50px'}} src={loggedInUser.photoURL} />
                            </div>
                            <div className="col-md-8">
                                <p className="text-info">{loggedInUser.displayName}</p>     
                            </div>
                    </li>
                </ul>
            </div>
    </nav>
    );
};

export default NavBar;