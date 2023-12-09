/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import Typical from "react-typical";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "./banner.css";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import CV from "../../public/Shakil's_Resume.pdf";
import shakil from "../assets/shakil.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration:1200,
    });
  }, []);
  const color = "#1e9bff";
  return (
    <section data-aos="fade-zoom-in" className="relative flex flex-col  z-20 paddingX paddingY header">
      <div className="flex items-center justify-around text-center">
       <div>
       <h1 className="  font-extrabold font-Montserrat tracking-wide">
          Welcome, I am
          <p className="text-[#25cdca] lg:text-7xl text-5xl font-Montserrat">
            Shakil
          </p>
        </h1>
        <p className="flex flex-col text-2xl font-bold tracking-widest gap-1">
          <span className="">I am a </span>

          <Typical
            loop={Infinity}
            className=""
            wrapper="b"
            steps={["Developer", 5000, "Designer", 5000, "learner", 5000]}
          />
        </p>

        <div className="flex mt-5 justify-center gap-8">
        <span>
            <a
              href="https://www.linkedin.com/in/shakil-hossian-757817263/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="w-7 h-7 text-blue-500"></FaLinkedin>
            </a>
          </span>
          <span>
            <a
              href="https://github.com/Shakil57375"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="w-7 h-7 text-black"></FaGithub>
            </a>
          </span>
          
          <span>
            <a
              href="https://web.facebook.com/profile.php?id=100056182026221"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="w-7 h-7 text-blue-500"></FaFacebook>
            </a>
          </span>
          
        <div className="my-5">
          <button>
            <a
              href={CV}
              download
              className="cursor-pointer "
              style={{ "--clr": color }}
            >
              <span>Download Resume</span> <i></i>
            </a>
          </button>
        </div>
        </div>
       </div>
        <div className="">
          <img
            className="mb-20 bg-gradient-to-t overflow-hidden from-transparent to-cyan-500 px-10 pt-10  rounded-tr-full rounded-tl-full rounded-br-none rounded-bl-none mx-auto h-64"
            src={shakil}
            alt=""
          />
        </div>
        <div className="absolute xs:bottom-10 bottom-[60px] right-0 w-full flex justify-center items-center">
          <Link to="about">
            <div className="w-[30px] h-[48px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer">
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-[10px] h-[10px] rounded-full bg-secondary mb-1"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
