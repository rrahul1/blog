import React from "react";
import cancel from "../assets/cancel.svg";

function BlogPost({ blog, handleClosePopup }) {
  console.log(blog);
  return (
    <div className="blog-post">
      <div className="blogDetail">
        <span className="cancel" onClick={handleClosePopup}>
          <img src={cancel} alt="cancel" />
        </span>
        <div className="blog-image">
          <img src={blog.thumb} alt="" />
        </div>
        <div className="detail">
          <h2>{blog.title}</h2>
          <p>{blog.short_description}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
