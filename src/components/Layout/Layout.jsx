import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.scss';
import logo from '../../assets/logo.png'
import AppRoutes from '../../routes/AppRoutes';
const Layout = (props) => {
    const [hideSideBar, setHideSideBar] = useState(false);
    return (
        <div className="bg-main">
            <div className='container'>
                <div className="row">
                    <div className={hideSideBar ? "col-xl-1 vh-100 sidebar" : "col-xl-3 vh-100 sidebar"}>
                        <nav className='navbar'>
                            <div className="d-flex sidebar-header">
                                <button onClick={() => setHideSideBar(hideSideBar ? false : true)} className='btn-humburger-icon'><i className="bi bi-list"></i></button>
                                {hideSideBar ?
                                    <></>
                                    :
                                    <div className="d-flex justify-content-center ms-3 brand">
                                        <img src={logo} alt="logo" />
                                        <span className='ms-3'>Admin</span>
                                    </div>

                                }
                            </div>
                            {hideSideBar ?
                                <></>

                                :
                                <Sidebar />
                            }

                        </nav>
                    </div>
                    <div className={hideSideBar ? "col-xl-11 p-0 content " : "col-xl-9 p-0 content"}>
                        <Navbar />
                        <AppRoutes />
                    </div>
                </div>
            </div>
            <div className="routes">

            </div>
        </div>
    );
};

export default Layout;