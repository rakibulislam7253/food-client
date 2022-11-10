import React, { useContext } from 'react';
import AuthProvider from '../../context/AuthProvider/AuthProvider';

const Comments = ({ comments, modify }) => {
  
    const { _id, name, comment } = comments
    
   
    const handeldelete = id => {
        const process = window.confirm('are you sure your comment  delete?')
        if (process) {
            fetch(`http://localhost:4000/comment${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }
    return (
        <div>

            <div className='width bg-gray-100 my-4 display'>


                <div>
                    <p className='font-semibold'> {name}</p>
                    {comment}
                </div>
                <div className='p-3'>
                    <button className="btn btn-sm mx-2">Update</button>
                    <button onClick={() => handeldelete(_id)} className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Comments;