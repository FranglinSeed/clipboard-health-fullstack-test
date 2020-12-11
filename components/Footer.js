import React from 'react';

const Footer = () => (
    <footer className="w-full bg-white">
        <div className="container mx-auto">
            <div className="md:flex p-8 pb-4 md:pb-0">
                <div className="w-full md:w-1/2">
                    <h2 className="font-bold">About us</h2>
                    <p className="mb-2">We are a team of nurses, doctors, technologists and executives dedicated to help nurses find jobs that
                        they love.
                    </p>
                    <p>All copyrights reserved © 2020 - Health Explore</p>
                </div>

                <div className="w-full md:w-1/4 pb-4 md:pb-0">
                    <h2 className="font-bold">Sitemap</h2>
                    <ul>
                        <li><a href="#">Nurses</a></li>
                        <li><a href="#">Employers</a></li>
                        <li><a href="#">Social networking</a></li>
                        <li><a href="#">Jobs</a></li>
                    </ul>
                </div>

                <div className="w-full md:w-1/4">
                    <h2 className="font-bold">Privacy</h2>
                    <ul>
                        <li><a href="#">Terms of use</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Cookie policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
