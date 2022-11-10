import React from 'react';

const Blog = () => {
    return (
        <div className='my-8 p-10'>


            <div className='bg-gray-200 p-5 rounded-xl '>
                <h2 className='text-3xl font-semibold'>What is the Difference between SQL and NoSQL?</h2>
                <h6>1.SQL databases have fixed or static or predefined schema where They have dynamic schema <br />
                    2.SQL databases are best suited for complex queries where NoSql databases are not so good for
                    complex queries
                </h6>
            </div>
            <div className='bg-gray-200 p-5 mt-4  rounded-xl'>
                <h2 className='text-3xl font-semibold'>What is JWT, and how does it work?</h2>
                <h6>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects,
                    including a set of claims. JWTs are signed using a cryptographic algorithm
                    to ensure that the claims cannot be altered after the token is issued. <br />
                    1.User sign-in using username and password or google/facebook. <br />
                    2.Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. <br />
                    3.User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. <br />
                    4.Resource server then verifies the authenticity of the token using the secret salt/ public key. <br />
                </h6>
            </div>

            <div className='bg-gray-200 p-5 mt-4  rounded-xl'>
                <h2 className='text-3xl font-semibold'>
                    What is the difference between javascript and NodeJS?
                </h2>
                <h6>1.Javascript can only be run in the browsers.where We can run Javascript outside the browser with the
                    help of NodeJS. <br />
                    2.It is basically used on the client-side.But Nodejs is mostly used on the server-side. <br />
                    3.	Javascript is capable enough to add HTML and play with the DOM.
                    Nodejs does not have capability to add HTML tags. <br />
                    4.	Javascript is used in frontend development.Nodejs is used in server-side development. <br />
                </h6>
            </div>

            <div className='bg-gray-200 p-5 mt-4  rounded-xl' >
            <h2 className='text-3xl font-semibold'>How does NodeJS handle multiple requests at the same time?</h2>
            <h6>How NodeJS handle multiple client requests. NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture.
                NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</h6>
            </div>

            


        </div>
    );
};

export default Blog;