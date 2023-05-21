import React, { useEffect, useState } from "react";
import { useBlogsData } from "../queryFunction/getBlogData";
import { saveDataInStore } from "../blogSlice/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "./BlogCard";

function Blog() {
  const { data } = useBlogsData();
  const dispatch = useDispatch();
  const { blogData } = useSelector((state) => state.blogs);

  const [article, setArticle] = useState("");

  useEffect(() => {
    dispatch(saveDataInStore(data?.data));
  }, [data, dispatch]);

  const filteredArticle = blogData.filter((blog) => {
    return blog.title.toLowerCase().includes(article.toLowerCase());
  });

  const handleArticles = () => {
    setArticle("");
  };

  return (
    <div className="blog">
      <div className="header">
        <h2
          style={{
            cursor: "pointer",
            color: "orange",
            textDecoration: "underline",
          }}
          onClick={handleArticles}
        >
          All Articles
        </h2>
        <input
          type="text"
          placeholder="Search Article"
          value={article}
          onChange={(e) => setArticle(e.target.value)}
        />
      </div>
      <div
        style={{
          width: "80%",
          margin: "auto",
          fontWeight: "bold",
        }}
      >
        {article ? `Search results for ${article}` : ""}
      </div>
      <div className="blogs">
        {filteredArticle &&
          filteredArticle.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
      </div>
    </div>
  );
}

export default Blog;
