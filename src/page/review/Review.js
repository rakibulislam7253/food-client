import React from 'react';
import './review.css'
import { Link, useLoaderData } from 'react-router-dom';

const Review = () => {
    const reviewdetails = useLoaderData()
    const { _id, title, img, description } = reviewdetails
    return (
        <div>
            <div className="card w-97 bg-base-100 bg-yellow-100 shadow-xl  mx-10 my-10 ">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl pic" />
                    {/* <img className="mask mask-circle pic"src={img} /> */}
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>


            {/* comment section */}
            <form >
               
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="Full Name" className="input input-ghost w-full  input-bordered" />
                    <br />
                    {/* <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" /> */}
                    {/* <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required /> */}
                    <input name="email" type="text" placeholder="Your email"  className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

                <input className='btn' type="submit" value="Submit" />
            </form>
        </div>

    );
};

export default Review;