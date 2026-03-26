import React from 'react';
import playstore from "../../assets/playstore.png"
import appstore from "../../assets/app-store.png"
import heroImage from "../../assets/hero.png"

const Banner = () => {
    return (
        <>
            <div className='py-9'>
                <h1 className='text-6xl font-bold text-center'>
                    We Build <br />
                    <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                        Productive</span> Apps
                </h1>
                <p className='text-[#627382] text-center md:w-4xl mx-auto mt-3 px-2'>At Producto, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className=" flex md:gap-5 gap-1 md:justify-center mt-5 px-1">
                    <a href="https://play.google.com/store/games?hl=en" target='_blank' className='flex gap-2 items-center border-1 border-gray-300 px-3 py-2 rounded-md w-[200px] justify-center'>
                        <img src={playstore} alt="google play" className='w-[30px]' />
                        <p className='text-[20px] font-semibold'>Google Play</p>
                    </a>
                    <a href="https://apps.apple.com/us/iphone/apps" target='_blank' className='flex gap-2 items-center border-1 border-gray-300 px-3 py-2 rounded-md w-[200px] justify-center'>
                        <img src={appstore} alt="google play" className='w-[30px]' />
                        <p className='text-[20px] font-semibold'>App Stor</p>
                    </a>
                </div>

            </div>
            <div className='flex justify-center mt-7 px-2'>
                <img src={heroImage} alt="" />
            </div>
        </>
    );
};

export default Banner;