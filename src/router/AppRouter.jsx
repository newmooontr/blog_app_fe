import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Layout from '../pages/Layout';

const AppRouter = () => {
  return (
  
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="login" element={<Login/>}/>
                
            </Route>
            
        </Routes>
  )
}

export default AppRouter