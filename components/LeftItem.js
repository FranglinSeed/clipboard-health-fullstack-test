import React from 'react';

const LeftItem = ({name, contents, hasDetail = false, onShowMore = null }) => {
    return (
        <div className="w-full bg-white mb-4 p-4">
            <h2 className="font-bold mb-2">{name.toLocaleUpperCase()}</h2>
            <ul>
              {contents.map((content, key) => {
                let docStr = new Number(content.doc_count);
                return(<li key={key}> { content.key } <span className="text-gray-500 text-xs"> { docStr.toLocaleString() } </span></li>)
              })}

              {hasDetail && <a href="#" className="text-sm text-indigo-600" onClick={() => {
                event.preventDefault();
                onShowMore();
              }}>Show more</a>}
            </ul>
        </div>
    );
};

export default LeftItem;
