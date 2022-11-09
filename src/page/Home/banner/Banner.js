import React from 'react';
import './BannerItem.css'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full py-10">
                <div id="slide1" className="carousel-item relative w-full BannerItem">

                    <div className='carousel-img'>
                        <img src="https://i.ytimg.com/vi/1L4ise7ytHY/maxresdefault.jpg" className="w-100 rounded-xl" />
                    </div>


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                        <h1 className='text-6xl font-bold text-white'>
                            Affordable <br />
                            Price for Car <br />
                            Servicing
                        </h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                        <p className='text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full BannerItem">
                    <div className='carousel-img'>
                        <img src="https://i.ytimg.com/vi/9o4GQfhsKdA/maxresdefault.jpg" className="w-100 rounded-xl " />
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>

                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                        <h1 className='text-6xl font-bold text-white'>
                            Affordable <br />
                            Price for Car <br />
                            Servicing
                        </h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                        <p className='text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full BannerItem">
                    <div className='carousel-img'>
                        <img src="https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/2:1/w_3756,h_1878,c_limit/Smashburger-recipe-120219.jpg" className="w-100 rounded-xl " />
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                        <h1 className='text-6xl font-bold text-white'>
                            Affordable <br />
                            Price for Car <br />
                            Servicing
                        </h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                        <p className='text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;