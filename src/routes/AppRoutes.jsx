import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddNew from '../components/User/AddNew';
import User from '../components/User/User';

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/user" element={<User />} />
                <Route path="/create-user" element={<AddNew />} />
            </Routes>
        </div >
    );
};

export default AppRoutes;