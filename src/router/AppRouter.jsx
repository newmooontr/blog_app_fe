import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import Layout from '../pages/Layout';
import NewBlog from '../pages/nevBlog/NewBlog';
import About from '../pages/about/About';
import Detail from '../pages/detail/Detail';
import PrivateRouter from "./PrivateRouter"

const AppRouter = () => {
  return (
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="home" element={<Home/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="login" element={<Login/>}/>  
            <Route path="detail/:postId" element={<PrivateRouter/>}>
                <Route path="" element={<Detail/>}/> 
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