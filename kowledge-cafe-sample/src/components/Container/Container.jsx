import React, { useEffect, useState } from "react";
import "./Container.css";
import SingleBlog from "../SingleBlog/SingleBlog";
import SingleTile from "../SingleTile/SingleTile";
import { ToastContainer, toast } from "react-toastify";

const Container = () => {
  const [blogs, setBlogs] = useState([]);
  const [times, setTimes] = useState([]);
  const [books, setBooks] = useState(0);
  useEffect(() => {
    fetch("BlogsData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const singleTitleData = (blog) => {
    let news = [];
    const vai = times.find((singleNew) => singleNew.id == blog.id);

    if (!vai) {
      news = [...times, blog];
    } else {
      toast.error("You Have Already Bookmarked This Blog!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    setTimes(news);
  };

  const singleReadData = (readTime) => {
    // console.log(readTime);
    const previousTime = books + readTime;
    // console.log(previousTime);
    setBooks(previousTime);
    // console.log(books);
  };

  return (
    <div className="container-divide my-6">
      <div>
        {blogs.map((blog) => (
          <SingleBlog
          books={books}
            blog={blog}
            key={blog.id}
            singleTitleData={singleTitleData}
            singleReadData={singleReadData}
          ></SingleBlog>
        ))}
      </div>

      <div>
        <div className="mb-4">
          <h1 className="container-style text-2xl font-bold">
            Spend time on read : {books}
          </h1>
        </div>

        <div className="bg-slate-200 ml-6 pb-3">
          <h1 className="font-bold text-3xl p-5 ">
            Bookmarked Blogs : {times.length}
          </h1>
          {times.map((book) => (
            <SingleTile book={book} key={book.id}></SingleTile>
          ))}
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Container;
