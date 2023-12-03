import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../../assets/images/default-avatar.png'
const Navbar = () => {
    const [showUser, setShowUser] = useState(false);
    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-main">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <form className="d-flex search-box">
                    <input className="form-control me-2 search-input" type="search" placeholder="Search" aria-label="Search" />
                    <i className="bi bi-search"></i>
                </form>
                <ul className="ms-auto navbar-nav">
                    <li className="nav-item dropdown">
                        <a onClick={() => setShowUser(showUser ? false : true)} className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className="avatar">
                                <img src={avatar} alt="avatar" />
                            </div>
                        </a>
                        <ul className={showUser ? "dropdown-menu dropdown-menu-start show" : "dropdown-menu dropdown-menu-start"}>
                            <li><NavLink className='dropdown-item' to='/user/profile' >Profile</NavLink></li>
                            <li><NavLink className='dropdown-item' to='/user/setting'>Setting</NavLink></li>
                            <li><button className='dropdown-item'>Logout</button></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav >
    );
};

export default Navbar;