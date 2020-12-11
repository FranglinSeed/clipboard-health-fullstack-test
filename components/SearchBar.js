import React from 'react';

const Searchbar = () => (
    <section className="bg-white p-2 md:p-4 mt-2 md:mt-4 mx-2 md:mx-4">
        <div className="flex justify-start px-4 items-center">
            <div className="search-icon mr-2">
                <svg className="fill-current pointer-events-none text-gray-800 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                </svg>
            </div>
            <input className="w-full p-1 focus:outline-none text-sm text-gray-500" placeholder="Search for any job, title, keywords or company" />
        </div>
    </section>
);

export default Searchbar;
