import React from 'react';
import Banner from './Banner';
import Count from './Count';
import TrendingApps from './TrendingApps';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Count></Count>
           <TrendingApps></TrendingApps>
        </div>
    );
};

export default Home;