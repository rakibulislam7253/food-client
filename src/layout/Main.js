import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../page/share/Footer';
import Header from '../page/share/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;