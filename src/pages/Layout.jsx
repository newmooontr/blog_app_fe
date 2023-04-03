import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { GlobalStyles } from '../components/globalStyle/GlobalStyles';


const Layout = () => {
  return (
    <div>
    {/* A "layout route" is a good place to put markup you want to
        share across all the pages on your site, like navigation. */}
    {/* <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/detail">Detail</Link>
        </li>

        <li>
          <Link to="/newblog">New Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav> */}
    <GlobalStyles/>
    <Navbar/>

    <hr />

    {/* An <Outlet> renders whatever child route is currently active,
        so you can think about this <Outlet> as a placeholder for
        the child routes we defined above. */}
    <Outlet />
  </div>
  )
}

export default Layout