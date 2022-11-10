import React, { useEffect, useState } from 'react';
import Itemscard from './Itemscard';
import './items.css'
import { Link } from 'react-router-dom';
const Items = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/three')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    
    return (
        <div>
            <div className='text-center mb-4'>
                {/* <p className="text-2xl font-bold text-orange-600">Services</p> */}
                <h2 className="text-5xl font-semibold">Our Food Items</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Itemscard
                        key={service._id}
                        service={service}
                    ></Itemscard>)
                }
            </div>
            <div>
               <Link to={'/services'}>  <button  className="btn btn-primary my-4 seemore  ">See All</button></Link>
            </div>
        </div>
    );
};

export default Items;