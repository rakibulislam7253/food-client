import React from 'react';
import About from './About/About';
import Banner from './banner/Banner';
import Des from './description/Des';
import Items from './items/Items';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Items></Items>
           <Des></Des>
           <About></About>
        </div>
    );
};

export default Home;