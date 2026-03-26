import React from 'react';

const Count = () => {
    return (
        <div className='py-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
            <h1 className='text-4xl font-semibold text-center text-white'>Trusted by Millions, Built for You</h1>
            <div className='mt-7 md:flex gap-28 md:justify-center'>
                <div className="count-cart text-center mb-5">
                    <p className='text-white text-[16px] font-normal'>Total Downloads</p>
                    <h1 className='text-white text-5xl py-5 font-black'>29.6M</h1>
                    <p className='text-white text-[16px]'>21% more than last month</p>
                </div>
                <div className="count-cart text-center mb-5">
                    <p className='text-white text-[16px] font-normal'>Total Reviews</p>
                    <h1 className='text-white text-5xl py-5 font-black'>906K</h1>
                    <p className='text-white text-[16px]'>46% more than last month</p>
                </div>
                <div className="count-cart text-center ">
                    <p className='text-white text-[16px] font-normal'>Active Apps</p>
                    <h1 className='text-white text-5xl py-5 font-black'>132+</h1>
                    <p className='text-white text-[16px]'>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default Count;