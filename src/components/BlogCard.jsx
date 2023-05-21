import React, { useState } from "react";
import { Link } from "react-router-dom";
import BlogPost from "./BlogPost";

function BlogCard({ blog }) {
  const [blogPopup, setBlogPopup] = useState(false);

  const handlePopup = () => {
    setBlogPopup(true);
  };

  const handleClosePopup = () => {
    setBlogPopup(false);
  };

  return (
    <>
      <Link className="blog-card" onClick={handlePopup}>
        <div className="blog-img">
          <img src={blog.thumb} alt="" />
        </div>
        <div className="blog-detail">
          <h2>{blog.title}</h2>
          <p>{blog.short_description}</p>
        </div>
      </Link>
      {blogPopup && (
        <BlogPost blog={blog} handleClosePopup={handleClosePopup} />
      )}
    </>
  );
}

export default BlogCard;
