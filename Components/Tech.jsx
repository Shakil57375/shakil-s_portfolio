import BallCanvas from "./Ball";
import technologies from "./TechIcon";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Tech = () => {
    useEffect(() => {
    AOS.init({
      duration:2200,
    });
  }, []);
  return (
    <div data-aos="fade-zoom-in" className='grid  lg:grid-cols-7 grid-cols-2 justify-center lg:px-20 px-2 gap-8 lg:gap-20'>
      {technologies.map((technology) => (
        <div  key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
