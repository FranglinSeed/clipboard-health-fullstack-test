import React from 'react';
import Nav from '../components/Nav'
import Footer from '../components/Footer'


const Layout = (props) => (
    <div className="bg-gray-100 w-full">
        <Nav />
        <main className="container mx-auto">
            {props.children}
        </main>
        <Footer />
    </div>
);

export default Layout;
