import React from 'react';
import { useLoaderData } from 'react-router';
import SingleApps from './SingleApps';

const Apps = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className=''>
            <div className='py-20 w-11/12 mx-auto'>
                <h1 className='text-center text-5xl font-bold'>Our All Applications</h1>
                <p className='text-center text-[#627382] text-[20px] mt-5'>Explore All Apps on the Market developed by us. We code for Millions</p>
                <div className='md:flex md: justify-between mb-5 mt-9'>
                    <h1 className='font-bold text-2xl'>{data.length} Apps Found</h1>
                    <div>
                        <label className="input">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" required placeholder="Search" />
                        </label>
                    </div>
                </div>
                {/* data card */}
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {
                    data.map((singleData, index) => <SingleApps singleData={singleData} key={index}></SingleApps>)
                }
                </div>
            </div>
        </div>
    );
};

export default Apps;