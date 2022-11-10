import React from 'react';

const About = () => {
    return (
        <div className='margin'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.bostonglobe.com/resizer/TQobFlHcHVL3HRo9Szay13hlWzc=/arc-anglerfish-arc2-prod-bostonglobe/public/E3RPWNJXPZUEWCYT2DF5CAZYWY.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome Everyone</h1>
                        <p className="mb-5">We will start our restuarant from December 16.Everyone is cordially invited in our restuarant.We will give 30% discount on our every items. </p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;