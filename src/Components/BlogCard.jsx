import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import RevealAnimation from "./Animation/RevealAnimation";
/* eslint-disable react/prop-types */
const BlogCard = ({ id, title, description, image }) => {
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (blogId) => {
    setExpandedDescriptions((prevState) => ({
      ...prevState,
      [blogId]: !prevState[blogId],
    }));
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="lg:w-[600px] w-full  text-white z-50">
      <img
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
        className="w-full h-[300px] rounded-3xl"
        src={image}
        alt={`Blog ${id}`}
      />
      <div className="mt-6">
        <RevealAnimation>
          <h3 className="text-3xl font-Inconsolata">{title}</h3>
        </RevealAnimation>
        <RevealAnimation>
          <p>
            {expandedDescriptions[id]
              ? description
              : `${description.slice(0, 150)}...`}
          </p>
        </RevealAnimation>
        {description.length > 150 && (
          <RevealAnimation>
            <div className="flex gap-1.5 items-center">
              <button
                onClick={() => toggleDescription(id)}
                className="text-fuchsia-700 text-lg font-semibold"
              >
                {expandedDescriptions[id] ? "Read Less " : "Read More"}
              </button>
              <div>
                <span className="text-fuchsia-700 font-bold">&#x3e;</span>
                <span className="text-fuchsia-700 font-bold">&#x3e;</span>
              </div>
            </div>
          </RevealAnimation>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
