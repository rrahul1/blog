import { Route, Routes } from "react-router-dom";
import React from "react";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/blog-detail/:slug" element={<BlogPost />} />
    </Routes>
  );
}

export default Router;
