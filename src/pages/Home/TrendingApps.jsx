import React from 'react';
import { useLoaderData } from 'react-router';
import SingleApps from '../Apps/SingleApps';

const TrendingApps = () => {

    const data = useLoaderData();

    
    const topApps = data.slice(0, 8);

    return (
        <div className='w-11/12 mx-auto py-16'>

            {/* Title */}
            <div className='text-center mb-10'>
                <h1 className='text-4xl font-bold'>Trending Apps</h1>
                <p className='text-gray-500 mt-2'>
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            {/* Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    topApps.map(app => (
                        <SingleApps
                            key={app.id}
                            singleData={app}
                        />
                    ))
                }
            </div>

        </div>
    );
};

export default TrendingApps;