import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Layout from '../pages/Layout';
import NewBlog from '../pages/NewBlog'
import About from '../pages/About'
import Dashboard from '../pages/Dashboard'
import PrivateRouter from "./PrivateRouter"

const AppRouter = () => {
  return (
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="home" element={<Home/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="login" element={<Login/>}/>  
            <Route path="dashboard" element={<PrivateRouter/>}>
                <Route path="" element={<Dashboard/>}/> 
            </Route>
            <Route path="newblog" element={<PrivateRouter/>}>
                <Route path="" element={<NewBlog/>}/> 
            </Route>
            <Route path="about" element={<About/>}/>  
          </Route>
        </Routes>        
  );
};

export default AppRouter;