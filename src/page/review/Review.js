import React, { useContext, useEffect, useState } from 'react';
import './review.css'
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Comments from './Comments';

const Review = () => {
    const { user } = useContext(AuthContext)
    const reviewdetails = useLoaderData()
    const { service_id, _id, title, img, description } = reviewdetails
    const [comment, setcomment] = useState([])
    const [commentmod, setcommentmod] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4000/comment?service_id=${service_id}`)
            .then(res => res.json())
            .then(data => setcomment(data))
        console.log(comment)
    }, [])



   


    const handelreview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const messege = form.message.value;
        const picture = form.picture.value;

        const comment =
        {
            service: _id,
            service_id: service_id,
            commenttitle: title,
            name: name,
            email: email,
            comment: messege,
            picture: picture
        }
        fetch('http://localhost:4000/comment',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    // authorization: `Bearer ${localStorage.getItem('genius-token')}`
                },
                body: JSON.stringify(comment)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {

                    form.reset();

                }
            })
            .catch(er => console.error(er));




        //


    }

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
            <h4 className='text-4xl font-semibold'>Review item : {title}</h4>

            <h4 className='text-3xl font-semibold'>Comments : {comment.length}</h4>

            {
                comment.map(comments =>
                    <Comments key={comments._id}
                        comments={comments}>

                    </Comments>)
            }


            
            <form onSubmit={handelreview} >

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    {
                        user?.uid ?
                            <>
                                <br />
                                <img name='picture' className='rounded-circle image' src={user.photoURL} alt="" />
                                <input name="name" type="text" placeholder="Full Name" defaultValue={user?.displayName} className="input input-ghost w-full  input-bordered" readOnly />
                                <br />
                                <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                                <br />
                                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>
                                <br />
                                <input className='btn' type="submit" value="Submit" />
                            </>
                            :
                            <>

                                <input name="name" type="text" placeholder="Full Name" defaultValue={user?.displayName} className="input input-ghost w-full  input-bordered" />
                                <br />
                                <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" />
                                <br />
                                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>
                                <br />
                                <Link to={'/login'}> <input className='btn' type="submit" value="Submit" /></Link>
                                <br />
                                <p>please login your account <Link to={'/login'} className="text-blue-700" >Login</Link></p>
                            </>

                    }




                    {/* <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" /> */}
                    {/* <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required /> */}

                </div>



            </form>
        </div>

    );
};

export default Review;