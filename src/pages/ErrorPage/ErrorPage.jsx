import React from 'react';
import errorImg from "../../assets/error-404.png"
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='py-28'>
            <img src={errorImg} alt=""  className='w-[500px] mx-auto'/>
            <h1 className='text-center text-5xl mt-4 mb-3 font-semibold'>Oops, page not found!</h1>
            <p className='text-center'>The page you are looking for is not available.</p>
            <Link to="/" className='flex justify-center mt-6'>
            <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white border-none hover:opacity-90">Go Back!</a>
            </Link>
        </div>
    );
};

export default ErrorPage;