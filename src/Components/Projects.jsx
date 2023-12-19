import { projects } from "../Data/projectData";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import ProjectCard from "./ProjectCard";
import SectionTitle from "../Utils/SectionTitle";
import GradientBackground from "./GradientBackground";
const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });
  return (
    <div className="relative">
      <div>
        <SectionTitle
          titleFirstWord={"My Projects"}
          titleFirstClassName={"text-8xl text-white font-bold font-Montserrat"}
          divClassName={"relative top-10 flex justify-center "}
        ></SectionTitle>
        <GradientBackground
          className={
            "absolute top-0 -right-48 bg-blue-600 blur-[120px] w-[400px] opacity-80 h-40"
          }
        />
      </div>
      <main ref={container} className="relative mt-32">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <ProjectCard
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </div>
  );
};

export default Projects;
