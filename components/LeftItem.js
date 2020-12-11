import React from 'react';
import Waiting from "./Waiting";

const LeftItem = (props) => {
    return (
        <div className="w-full bg-white mb-4 p-4">
            <h2 className="font-bold mb-2">JOB TYPE</h2>
            <ul>
                <li className="font-medium">Per-Delm <span className="text-gray-500 text-sm">1,991</span></li>
                <li className="font-medium">Traveler <span className="text-gray-500 text-sm">1,976</span></li>
                <li className="font-medium">Part-time <span className="text-gray-500 text-sm">1,938</span></li>
                <li className="font-medium">Full-time <span className="text-gray-500 text-sm">1,848</span></li>
            </ul>
        </div>
    );
};

export default LeftItem;
