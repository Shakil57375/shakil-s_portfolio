import { useState } from "react";
/* eslint-disable react/prop-types */
const BlogCard = ({ id, title, description, image }) => {
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (blogId) => {
    setExpandedDescriptions((prevState) => ({
      ...prevState,
      [blogId]: !prevState[blogId],
    }));
  };
  return (
    <div className="w-[600px] text-white">
      <img
        className="w-full h-[300px] rounded-3xl"
        src={image}
        alt={`Blog ${id}`}
      />
      <div className="mt-6">
        <h3 className="text-3xl font-Inconsolata">{title}</h3>
        <p>
          {expandedDescriptions[id]
            ? description
            : `${description.slice(0, 150)}...`}
        </p>
        {description.length > 150 && (
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
        )}
      </div>
    </div>
  );
};

export default BlogCard;
