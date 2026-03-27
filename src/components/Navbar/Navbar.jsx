import React from 'react';
import { Link, NavLink } from "react-router";
import logoImage from "../../assets/logo.png"
import { FaGithub } from "react-icons/fa";

const Navbar = () => {


    const links = <>
        <div className='md:flex gap-3'>
            <NavLink to="/"><li className='font-semibold text-[15px]'>Home</li></NavLink>
            <NavLink to="/apps"><li className='font-semibold text-[15px]'>Apps</li></NavLink>
            <NavLink to="/installation"><li className='font-semibold text-[15px]'>Installation</li></NavLink>
        </div>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <img className='w-[40px]' src={logoImage} alt="logo" />
                        <Link to={"/"}><h1 className='text-2xl font-semibold'>Producto</h1></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='https://github.com/mdiffatbari' target='_blank' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white border-none hover:opacity-90">
                        <FaGithub /> Contribute
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;