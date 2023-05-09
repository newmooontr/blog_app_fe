import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { GlobalStyles } from '../components/globalStyle/GlobalStyles';
import Footer from '../components/footer/Footer';


const Layout = () => {
  return (
    <div>
   
    <GlobalStyles/>
    <Navbar/>
    

    <hr />
    <Outlet />
    <hr />

    <Footer/>
  </div>
  )
}

export default Layout