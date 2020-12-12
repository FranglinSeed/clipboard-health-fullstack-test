import React from 'react';
import RightItem from './RightItem';

const RightList = ({filters}) => (
    <div className="py-4 md:py-8 px-8 space-y-4 md:space-y-6">
        <RightItem />
        <RightItem />
        <RightItem />
    </div>
);

export default RightList;
