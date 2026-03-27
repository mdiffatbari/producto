import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-black text-white p-10">
                <aside>
                    
                    <img src={logo} className='w-[50px]' alt="" />

                    <p className="font-bold text-lg">
                        Producto App Store
                        <br />
                        Discover, install, and manage your favorite apps
                    </p>

                    <p className="text-gray-400">
                        © {new Date().getFullYear()} Producto. All rights reserved.
                    </p>
                </aside>

                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://github.com/mdiffatbari' target='_blank' className="hover:text-gray-400 transition text-2xl">
                            <FaGithub />
                        </a>

                        <a href='https://www.linkedin.com/in/mdiffatbari/' target='_blank' className="hover:text-gray-400 transition text-2xl">
                            <FaLinkedin />
                        </a>

                        <a href='https://x.com/mdiffatbari' target='_blank' className="hover:text-gray-400 transition text-2xl">
                            <FaSquareXTwitter />
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;