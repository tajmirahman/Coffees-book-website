import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBer = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm z-30 fixed backdrop-blur-lg bg-white/30">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink to={'/'} className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>Home</NavLink>
                        <NavLink to={'/coffee'} className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>Coffee</NavLink>
                        <NavLink to={'/dashboard'} className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>Dashboard</NavLink>
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl">Coffee_Book_Recap</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal gap-4 text-2xl px-1">
                    <NavLink to={'/'} className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>Home</NavLink>
                    <NavLink to={'/coffee'} className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>Coffee</NavLink>
                    <NavLink to={'/dashboard'} className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>Dashboard</NavLink>


                </ul>
            </div>

        </div>
    );
};

export default NavBer;