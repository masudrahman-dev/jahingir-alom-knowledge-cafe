import React from 'react';
import './SingleBlog.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark} from "@fortawesome/free-solid-svg-icons";

const SingleBlog = (props) => {
    const {id, authorImage, name, coverImage, publishDate, readTime, title} = props.blog;
    const singleTitleData = props.singleTitleData;
    const singleReadData = props.singleReadData;
    const {books} = props

   

    return (
        <div className='mb-6'>
            <img className='img-size' src={coverImage} alt="" />
            <div className='blog-data my-5'>
           <div className='flex justify-between items-center'>
            <img className='w-14 h-14 mt-3 img' src={authorImage} alt="" />
            <div className='ms-3 text-left'>
                <h1 className='font-bold text-xl'>{name}</h1>
                <p>{publishDate}</p>
            </div>
           </div>

           <div className='flex justify-center items-center'>
               <p className='me-3'><span>{readTime}</span> min read</p>
               <FontAwesomeIcon 
                    onClick={() => singleTitleData(props.blog)}
                    className='hover:text-blue-600 text-2xl'
                    icon={faBookmark}
                />
           </div>
        </div>
        <h1 className='text-left text-3xl font-bold'>{title}</h1>
        <br />
        <div className='flex mb-3'>
        <p className='me-2'>#beginners</p> <p>#programming</p>
        </div>
        <div className='text-left mb-6'>
        <button onClick={() => singleReadData(readTime)} className='text-xl underline decoration-1 text-blue-600' href="/mark">Mark as read</button>
        </div>
        <hr />
        </div>
    );
};




export default SingleBlog;