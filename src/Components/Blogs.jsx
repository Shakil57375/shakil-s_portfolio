import SectionTitle from "../Utils/SectionTitle";
import { blogs } from "../Data/BlogsData";
import { useState } from "react";
import BlogCard from "./BlogCard";
import Button from "./Button";

const Blogs = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(4);
  const [showMoreBlogs, setShowMoreBlogs] = useState(false);

  const toggleBlogs = () => {
    setShowMoreBlogs(!showMoreBlogs);

    // Set the state accordingly
    if (!showMoreBlogs) {
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
      <div className="grid grid-cols-2 grid-rows-2 gap-10 mt-20">
        {blogs.slice(0, visibleBlogs).map((blog) => (
          <BlogCard key={`${blog.id}`} {...blog} />
        ))}
      </div>
      <div onClick={toggleBlogs} className="flex justify-center mt-10">
        <Button className="text-white">
          {showMoreBlogs ? "Show Less Blogs" : "Show More Blogs"}
        </Button>
      </div>
    </div>
  );
};

export default Blogs;
