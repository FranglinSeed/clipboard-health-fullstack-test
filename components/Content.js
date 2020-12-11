import React from 'react';
import LeftItem from "./LeftItem";
import RightBannar from "./RightBannar";
import RightList from "./RightList";
import LeftList from "./LeftList";

const Content = () => (
    <section className="container mx-auto">
        <div className="m-2 md:m-4">
            <div className="flex">
                <div className="hidden md:block md:w-64">
                    <LeftList />
                </div>
                <div className="w-full bg-white md:ml-4">
                    <RightBannar />
                    <RightList />
                </div>
            </div>
        </div>
    </section>
);

export default Content;
