import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Privaterouter = ({ children }) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading)
    {
       return <div className="radial-progress text-primary" style={{"--value":70}}>70%</div>
    }

    if (!user) {
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default Privaterouter;