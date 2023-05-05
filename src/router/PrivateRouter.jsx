import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import useAuthService from '../common/auth/AuthService';

const PrivateRouter = () => {
  const authService = useAuthService();
  const user = authService.getUser();
  console.log(user);
  return (
    <div>
        {user ? <Outlet/> :  <Navigate to="/login"/>}
    </div>
  )
}

export default PrivateRouter