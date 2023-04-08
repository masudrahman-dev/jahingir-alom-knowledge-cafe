import React from 'react';
import './SingleTile.css';

const SingleTile = (props) => {
    return (
        <div className='bookmarks'>
            <h3 className='font-bold text-xl'>{props.book.title}</h3>
        </div>
    );
};

export default SingleTile;