import SectionTitle from "../Utils/SectionTitle";
import { blogs } from "../Data/BlogsData";
import { useState } from "react";
import BlogCard from "./BlogCard";
const Blogs = () => {
  console.log(blogs);
  const [visibleBlogs, setVisibleBlogs] = useState(4);
  const [showMore, setShowMore] = useState(true);

  const toggleBlogs = () => {
    // Toggle between showing more or fewer blogs
    setShowMore(!showMore);

    // Set the state accordingly
    if (showMore) {
      setVisibleBlogs(blogs.length);
    } else {
      setVisibleBlogs(4);
    }
  };
  return (
    <div className="paddingX paddingY">
      <SectionTitle
        titleFirstWord={"My Blogs"}
        titleFirstClassName={"text-8xl text-white font-bold font-Montserrat"}
        divClassName={"left-28 flex justify-start "}
      ></SectionTitle>
      <div>
        {blogs.slice(0, visibleBlogs).map((blog) => (
          <BlogCard key={`${blog.id}`} {...blog} />
        ))}
      </div>
      <div>
        {blogs.length > 4 && (
          <button onClick={toggleBlogs}>
            {showMore ? "Show More Blogs" : "Show Less Blogs"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Blogs;
