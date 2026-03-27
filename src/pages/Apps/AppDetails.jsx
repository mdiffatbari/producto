
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip
} from "recharts";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppDetails = () => {

    const data = useLoaderData();
    const { id } = useParams();
    const appId = parseInt(id);

    const singleAppData = data.find(app => app.id === appId);

  
    if (!singleAppData) {
        return <p className="text-center py-40">App Not Found</p>;
    }

    const {
        title,
        image,
        companyName,
        downloads,
        ratingAvg,
        reviews,
        description,
        size,
        ratings
    } = singleAppData;

    // chart data
    const chartData = [...ratings].reverse();

    // ✅ state for install
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
        const found = installedApps.find(app => app.id === singleAppData.id);
        setIsInstalled(found ? true : false);
    }, [singleAppData.id]);

    // ✅ install handler
    const handleInstall = () => {
        const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];

        const alreadyInstalled = installedApps.find(app => app.id === singleAppData.id);

        if (alreadyInstalled) {
            toast.warning("Already Installed!");
            return;
        }

        const updatedApps = [...installedApps, singleAppData];
        localStorage.setItem("installedApps", JSON.stringify(updatedApps));

        setIsInstalled(true); // 🔥 important

        toast.success("App Installed Successfully!");
    };

    return (
        <div className='w-11/12 mx-auto py-40'>

            {/* Top Section */}
            <div className='md:flex gap-6'>
                <div className='md:w-[20%]'>
                    <img
                        className='bg-white p-8 rounded-sm'
                        src={image}
                        alt={title}
                    />
                </div>

                <div className="md:w-[80%]">
                    <h1 className='text-5xl font-bold'>{title}</h1>

                    <p className='pt-2 font-semibold'>
                        Company:
                        <span className='ml-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>
                            {companyName}
                        </span>
                    </p>

                    <div className="divider"></div>

                    {/* Stats */}
                    <div className="md:flex md:gap-10">

                        <div>
                            <img src={downloadImg} alt="download" />
                            <p className='py-3'>Downloads</p>
                            <h1 className='text-3xl font-black'>{downloads}</h1>
                        </div>

                        <div>
                            <img src={ratingImg} alt="rating" />
                            <p className='py-3'>Average Ratings</p>
                            <h1 className='text-3xl font-black'>{ratingAvg}</h1>
                        </div>

                        <div>
                            <img src={reviewImg} alt="review" />
                            <p className='py-3'>Reviews</p>
                            <h1 className='text-3xl font-black'>{reviews}</h1>
                        </div>

                    </div>

                    {/* Install Button */}
                    <button
                        onClick={handleInstall}
                        disabled={isInstalled}
                        className={`btn mt-5 text-white text-[16px] ${
                            isInstalled
                                ? "btn-disabled bg-gray-400"
                                : "btn-success"
                        }`}
                    >
                        {isInstalled ? "Installed" : `Install Now (${size}MB)`}
                    </button>
                </div>
            </div>

            {/* Divider */}
            <div className="divider mb-12"></div>

            {/* Ratings Chart */}
            <div className="w-full h-[300px]">
                <h2 className="text-xl font-semibold mb-4">Ratings</h2>

                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={chartData}
                        layout="vertical"
                        margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                    >
                        <XAxis type="number" axisLine={false} tickLine={false} />
                        <YAxis
                            dataKey="name"
                            type="category"
                            axisLine={false}
                            tickLine={false}
                        />
                        <Tooltip />

                        <Bar
                            dataKey="count"
                            fill="#f97316"
                            radius={[0, 6, 6, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Divider */}
            <div className="divider mt-24"></div>

            {/* Description */}
            <div>
                <h1 className='text-2xl font-bold mb-4'>Description</h1>
                <p className='text-gray-600'>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;