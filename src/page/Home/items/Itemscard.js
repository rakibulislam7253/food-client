import React from 'react';
import { Link } from 'react-router-dom';

const Itemscard = ({service}) => {
    const { _id, img, price, title,sort_descrip } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-1xl '> {sort_descrip}</p>
                <p className='text-2xl font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/review/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>

                </div>
            </div>

        </div>
    );
};

export default Itemscard;