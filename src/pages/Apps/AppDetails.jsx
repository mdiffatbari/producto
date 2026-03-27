import React from 'react';
import { useLoaderData, useParams } from 'react-router';

import downloadImg from "../../assets/icon-downloads.png"
import ratingImg from "../../assets/icon-ratings.png"
import reviewImg from "../../assets/icon-review.png"

const AppDetails = () => {
    const data = useLoaderData();

    const { id } = useParams();
    const appId = parseInt(id);

    const singleAppData = data.find(appData => appData.id === appId);
    // console.log(singleAppData)

    // destructure

    const { title, image, companyName, downloads, ratingAvg, reviews, description, size } = singleAppData;


    return (
        <div className='w-11/12 mx-auto py-40'>
            <div className='md:flex '>
                <div className='md:w-[20%]'>
                    <img className='md:mr-14 bg-white p-8 rounded-sm' src={image} alt="" />
                </div>
                <div className="right-cart md:w-[80%]">
                    <h1 className='text-5xl font-bold'>{title}</h1>
                    <p className='pt-2 font-semibold'>Company: <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{companyName}</span></p>
                    <div className="divider"></div>

                    <div className="total-details-area md:flex md:gap-10">

                        <div className="download">
                            <img src={downloadImg} alt="download" />
                            <p className='py-3'>Downloads</p>
                            <h1 className='text-3xl font-black'>{downloads}</h1>
                        </div>

                        <div className="rating-cart">
                            <img src={ratingImg} alt="download" />
                            <p className='py-3'>Average Ratings</p>
                            <h1 className='text-3xl font-black'>{ratingAvg}</h1>
                        </div>

                        <div className="review">
                            <img src={reviewImg} alt="download" />
                            <p className='py-3'>Downloads</p>
                            <h1 className='text-3xl font-black'>{reviews}</h1>
                        </div>

                    </div>
                    <button className="btn btn-success mt-5 text-white text-[16px]">Install Now({size}MB)</button>
                </div> 
            </div>
            <div className="divider"></div>
            <div className="divider"></div>
            <h1>Description</h1>
            <p>{description}</p>
        </div>
    );
};

export default AppDetails;