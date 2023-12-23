import SectionTitle from "../Utils/SectionTitle";
import { blogs } from "../Data/BlogsData";
import { useState } from "react";
import BlogCard from "./BlogCard";
import Button from "./Button";
import GradientBackground from "./GradientBackground";
import { FaXmark } from "react-icons/fa6";

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
    <div id="blogs" className="paddingX paddingY relative z-30">
      <div className="flex items-start justify-between ">
        <SectionTitle
          titleFirstWord={"My Blogs"}
          titleFirstClassName={"text-8xl text-white font-bold font-Montserrat mt-12 lg:mt-0"}
          divClassName={"left-28 flex justify-start text-center "}
        ></SectionTitle>
        <FaXmark className="text-8xl text-white lg:block hidden" />
      </div>
      <GradientBackground
        className={`absolute top-80 left-4 bg-pink-700 blur-[120px] w-96 h-80 opacity-40`}
      />
      <GradientBackground
        className={`absolute top-20 right-4 bg-fuchsia-900 blur-[120px] w-96 h-80 opacity-40`}
      />
      <GradientBackground
        className={`absolute top-96 right-28 bg-blue-800 blur-[120px] w-96 h-80 opacity-40`}
      />
      <GradientBackground
        className={`absolute top-[500px] right-[500px] bg-rose-800 blur-[120px] w-96 h-80 opacity-40`}
      />
      <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-1 lg:grid-rows-2 gap-10 mt-20 lg:px-0 px-2">
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
