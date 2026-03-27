import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";

const Installation = () => {
    const [apps, setApps] = useState([]);
    const [sortType, setSortType] = useState("");

    useEffect(() => {
        const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
        setApps(storedApps);
    }, []);

    const handleUninstall = (id) => {
        const updatedApps = apps.filter(app => app.id !== id);
        setApps(updatedApps);
        localStorage.setItem("installedApps", JSON.stringify(updatedApps));
        toast.info("App Uninstalled!");
    };

    const handleSort = (type) => {
        let sorted = [...apps];

        if (type === "high") {
            sorted.sort((a, b) => b.downloads - a.downloads);
        } else if (type === "low") {
            sorted.sort((a, b) => a.downloads - b.downloads);
        }

        setSortType(type);
        setApps(sorted);
    };

    return (
        <div className="w-11/12 mx-auto py-20">
            <h1 className="text-4xl font-bold text-center">Your Installed Apps</h1>
            <p className="text-center text-gray-500 mt-2">
                Explore All Trending Apps on the Market developed by us
            </p>

            <div className="flex justify-between items-center mt-10">
                <p className="font-semibold">{apps.length} Apps Found</p>

                <select
                    className="select select-bordered"
                    onChange={(e) => handleSort(e.target.value)}
                >
                    <option value="">Sort By Downloads</option>
                    <option value="high">High → Low</option>
                    <option value="low">Low → High</option>
                </select>
            </div>

            <div className="mt-6 space-y-4">
                {apps.map(app => (
                    <div
                        key={app.id}
                        className="flex items-center justify-between bg-base-200 p-4 rounded-lg"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={app.image}
                                className="w-16 h-16 bg-white p-2 rounded"
                            />

                            <div>
                                <h2 className="font-semibold">{app.title}</h2>

                                <div className="flex gap-4 text-sm text-gray-500 mt-1">
                                    <span>⬇ {app.downloads}</span>
                                    <span>⭐ {app.ratingAvg}</span>
                                    <span>{app.size} MB</span>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => handleUninstall(app.id)}
                            className="btn btn-success text-white"
                        >
                            Uninstall
                        </button>
                    </div>
                ))}
            </div>

            {apps.length === 0 && (
                <p className="text-center mt-10 text-gray-400">
                    No Installed Apps Found
                </p>
            )}
        </div>
    );
};

export default Installation;