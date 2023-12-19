/* eslint-disable react/prop-types */
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import "./ProjectCard.css";
const ProjectCard = ({
  i,
  title,
  workingMnt,
  description,
  src,
  color,
  progress,
  technologies,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="cardContainer text-white">
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="card"
      >
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <p className="text-xl ">{workingMnt}</p>
        </div>
        <div className="body">
          <div className="description">
            <p>{description}</p>
            <div className="">
              <h1 className="font-semibold">Technologies : </h1>
              <span>{technologies}</span>
            </div>
          </div>
          <div className="imageContainer">
            <motion.div className="screen" style={{ scale: imageScale }}>
              <img src={src} alt="image" />
            </motion.div>
          </div>
        </div>
        
      </motion.div>
    </div>
  );
};

export default ProjectCard;
