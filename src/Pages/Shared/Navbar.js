
import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'



const Navbar = () => {







    const menubar = <>

        <li><Link to="/">Home</Link></li>
        <li><Link to="/appointment">Appoitment</Link></li>
        <li><Link to="/review">Review</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/about">About</Link></li>

        {/* {
            user && <li><Link to="/dashboard">Dashboard</Link></li>

        }

        <li>{user ? <button className="btn btn-active btn-ghost" onClick={logout}>SIGN OUT</button> : <Link to="/login">Login</Link>}</li> */}
    </>
    return (
        <div className="navbar bg-base-100">
            < div class="navbar-start" >
                <div class="dropdown" >
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menubar}
                    </ul>
                </div >
                {/* <a class="btn btn-ghost normal-case text-3xl" >Core Computer Castle</a > */}
                <img className='w-20 mx-20' src={logo} alt="" />
            </div >
            <div class="navbar-center hidden lg:flex" >
                <ul class="menu menu-horizontal p-0" >
                    {menubar}
                </ul >
            </div >
            <div className='navbar-end'>
                <label tabindex="1" for="dashboards-sidebar" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
        </div >
    );
};

export default Navbar;