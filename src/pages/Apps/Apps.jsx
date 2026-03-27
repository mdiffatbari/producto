
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import SingleApps from './SingleApps';
import appErrorImg from "../../assets/App-Error.png"

const Apps = () => {

    const data = useLoaderData();

    // ✅ search state
    const [searchText, setSearchText] = useState("");

    // ✅ filter logic (case-insensitive)
    const filteredApps = data.filter(app =>
        app.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div>
            <div className='py-20 w-11/12 mx-auto'>

                <h1 className='text-center text-5xl font-bold'>
                    Our All Applications
                </h1>

                <p className='text-center text-[#627382] text-[20px] mt-5'>
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>

                {/* Search + Count */}
                <div className='md:flex justify-between mb-5 mt-9 items-center gap-4'>

                    {/* ✅ dynamic count */}
                    <h1 className='font-bold text-2xl'>
                        {filteredApps.length} Apps Found
                    </h1>

                    <div>
                        <label className="input input-bordered flex items-center gap-2">
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

                            {/* ✅ LIVE SEARCH */}
                            <input
                                type="search"
                                placeholder="Search apps..."
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                className="outline-none"
                            />
                        </label>
                    </div>
                </div>

                {/* Data Cards */}
                {
                    filteredApps.length === 0 ? (
                        
                        <div className='text-center py-20 w-11/12 mx-auto'>
                            <div className='flex justify-center'>
                                <img src={appErrorImg} alt="" className=''/>
                            </div>
                            <h1 className='text-3xl font-bold mt-5'>OPPS!! APP NOT FOUND</h1>
                            <p className='py-4 text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
                            <Link to={"/"}><button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white btn'>Go Back!</button></Link>
                        </div>
                    ) : (
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                            {
                                filteredApps.map((singleData) => (
                                    <SingleApps
                                        singleData={singleData}
                                        key={singleData.id}
                                    />
                                ))
                            }
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Apps;