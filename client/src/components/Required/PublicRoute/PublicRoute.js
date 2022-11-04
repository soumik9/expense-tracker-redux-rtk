import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {

    // redux selector
    const auth = useSelector((state) => state.auth);

    // if not authenticated then go to login page
    if(!auth.isAuthenticated) {
        return children
    }

    return  <Navigate to="/dashboard" />;
};

export default PublicRoute;