import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const SingleApps = ({ singleData }) => {
    const { title, image, ratingAvg, downloads, id } = singleData;
    return (
        <Link to={`/apps/${id}`}>
            <div>
                <div className="card bg-base-100 shadow-sm">
                    <figure className="p-7">
                        <img
                            src={image}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <div className="card-actions flex justify-between">
                            <button className="btn btn-soft btn-success"> <MdOutlineFileDownload /> {downloads}</button>
                            <button className="btn btn-soft btn-warning"> <FaStar />{ratingAvg}</button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SingleApps;