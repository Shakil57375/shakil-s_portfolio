/* eslint-disable react/prop-types */
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import "./ProjectCard.css";
import { FaEye, FaGithub } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
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
  github,
  liveLink,
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
          <div className="description flex flex-col gap-7">
            <p className="text-base">{description}</p>
            <div className="">
              <h1 className="font-semibold text-lg">Technologies : </h1>
              <span className="text-base ">{technologies}</span>
            </div>
            <div className="flex gap-5">
              <a target="_blank" href={liveLink} rel="noreferrer">
                <MdOutlineLiveTv className=" w-8 h-8 " />
              </a>
              <a target="_blank" rel="noreferrer" href={github}>
                <FaGithub className="w-8 h-8" />
              </a>
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
