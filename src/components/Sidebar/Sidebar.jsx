import React from 'react';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className='pt-5 sidebar-menu'>
            <div className="item">
                <h5><span className='me-3'><i className="bi bi-speedometer2"></i></span> Dashboard </h5>
                <ul className='nav flex-column'>
                    <li className='nav-item' >
                        <NavLink className='nav-link' to='/user'>
                            Manage User
                        </NavLink>
                    </li>
                    <li className='nav-item' >
                        <NavLink className='nav-link' to='/create-user'>
                            Create User
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;