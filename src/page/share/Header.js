import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import'./hrader.css'
const Header = () => {
    const { user, logout } = useContext(AuthContext)

    const handellogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>

    </>
    return (
        <div className="navbar bg-base-100 bg-slate-800 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    {/* <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                       
                    </ul> */}
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">Spicy Onion</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <>
                            <img className='rounded-circle image' src={user.photoURL} alt="" />
                            <button onClick={handellogout} className='mx-2 btn btn-outline-primary' >Logout</button>

                        </>

                        :
                        <>
                            <Link className='textdecoration  mx-2 btn btn-outline-warning' to={'/login'}>Login</Link>
                           
                            <FaUser></FaUser>



                        </>

                }
                {/* <Link to='/login' className="btn">Login</Link> */}
            </div>
        </div>
    );
};

export default Header;