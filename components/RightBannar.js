import React from 'react';

const RightBannar = () => (
    <div className="pt-4 md:pt-8 px-4 flex justify-between">
        <div>
            <p className="font-medium">7,753<span className="text-gray-500 font-sm ml-2">job postings</span></p>
        </div>
        <div className="flex hidden lg:block space-x-4">
            <a href="#" className="font-medium text-gray-500">Sory by</a>
            <a href="#" className="font-medium text-gray-900">Location</a>
            <a href="#" className="font-medium text-gray-900">Role</a>
            <a href="#" className="font-medium text-gray-900">Department</a>
            <a href="#" className="font-medium text-gray-900">Education</a>
            <a href="#" className="font-medium text-gray-900">Experience</a>
        </div>
    </div>
);

export default RightBannar;
