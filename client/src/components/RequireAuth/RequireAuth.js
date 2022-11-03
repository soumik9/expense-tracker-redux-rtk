import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {

    // redux selector
    const auth = useSelector((state) => state.auth);

    // if not authenticated then go to login page
    if(!auth.isAuthenticated) {
        return <Navigate to="/login" />
    }

    return children;
};

export default RequireAuth;