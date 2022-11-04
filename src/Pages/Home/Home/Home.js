import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Experts from './Experts/Experts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;