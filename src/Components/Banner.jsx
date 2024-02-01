/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import CV from "../../public/Shakil's_Resume.pdf";
import { Link } from "react-scroll";
import { MdOutlineHorizontalRule } from "react-icons/md";
import "./banner.css";
import { ImCross } from "react-icons/im";
import { FaDownload } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLongArrowAltDown } from "react-icons/fa";
import GradientBackground from "./GradientBackground";
import Social from "./Social";
import RevealAnimation from "./Animation/RevealAnimation";
import { useEffect } from "react";
const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="home" className="header flex items-center justify-between !z-10">
      <GradientBackground
        className={`absolute top-10 right-0 bg-blue-800 blur-3xl w-96 h-80 opacity-40`}
      />
      <GradientBackground
        className={`absolute top-56 right-0 bg-pink-800 blur-3xl w-96 h-80 opacity-40`}
      />
      <GradientBackground
        className={`absolute top-[400px] right-0 bg-pink-300 blur-3xl w-96 h-80 opacity-40`}
      />
      <div className="flex flex-col gap-2 text-white absolute top-1/3">
        <MdOutlineHorizontalRule className="skew-y-[45deg] text-5xl text-pink-300" />
        <MdOutlineHorizontalRule className="skew-y-[45deg] text-5xl text-pink-300" />
        <MdOutlineHorizontalRule className="skew-y-[45deg] text-5xl text-pink-300" />
        <MdOutlineHorizontalRule className="skew-y-[45deg] text-5xl text-pink-300" />
        <MdOutlineHorizontalRule className="skew-y-[45deg] text-5xl text-pink-300" />
      </div>
      <section className="text-white flex flex-col z-20 paddingX paddingY">
        <div className="flex flex-col lg:flex-row mt-24 items-center justify-between paddingX gap-0 lg:gap-10">
          <div className="flex flex-col  items-start">
            <RevealAnimation>
              <h1 className="font-semibold text-gray-500 text-3xl">
                MERN-stack developer
              </h1>
              <p className="lg:text-8xl text-6xl font-bold lg:font-extrabold font-Montserrat mt-8 mb-1">
                SHAKIL
              </p>
              <p className="lg:text-8xl text-6xl font-bold lg:font-extrabold font-Montserrat">
                HOSSAIN
              </p>
            </RevealAnimation>
            <div className="mt-10 flex flex-col lg:flex-row justify-between gap-4 lg:gap-40 items-start">
              <RevealAnimation>
                <div className=" border-r-0 border-t-0 border-b-0 border-l-1 pl-8 py-2 border text-xl font-semibold text-gray-500">
                  <p>I am MERN-stack</p>
                  <p>developer work remotely</p>
                  <p>from Bangladesh</p>
                </div>
              </RevealAnimation>
              <div className="lg:my-5 my-2 text-white relative lg:left-0 left-28">
                <a
                  data-aos="fade-up"
                  href={CV}
                  download
                  className="cursor-pointer bg-pink-700 flex flex-col py-1 lg:py-4 lg:px-8 px-5 pulse-anim play-icon items-center gap-1"
                >
                  <FaDownload className="text-3xl" />
                  <p className="text-3xl font-bold">CV</p>
                </a>
              </div>
            </div>
          </div>
          <div
            className="relative lg:left-28 left-10 "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="linear"
          >
            <ImCross className="text-3xl lg:block hidden" />
            <div className="box relative z-0 top-24 "></div>
            <img
              src="https://i.ibb.co/HrXCPtB/shakil-banner-image.png"
              className=" z-0 absolute translate-x-10 -translate-y-3/4 top-3/4 lg:h-[650px] h-[350px] mt-8"
              alt=""
            />
          </div>
          <div className="absolute xs:bottom-10 bottom-[60px] right-0 w-full flex justify-center items-center">
            <Link to="about">
              <div className="w-[30px] h-[48px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer">
                <div className="w-[10px] h-[10px] rounded-full bg-secondary mb-1 animate-bounce" />
              </div>
            </Link>
          </div>
        </div>
      </section>
      <div data-aos="flip-left" className="relative right-8 lg:flex lg:flex-col items-center z-50">
        <FaLongArrowAltDown className="text-xl text-white animate-bounce h-6" />
        <Social />
      </div>
    </div>
  );
};

export default Banner;
