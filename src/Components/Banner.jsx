/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import CV from "../../public/Shakil's_Resume.pdf";
import { Link } from "react-scroll";
import { MdOutlineHorizontalRule } from "react-icons/md";
import "./banner.css";
import { FaDownload } from "react-icons/fa6";
import shakil from "../assets/shakil.png";
const Banner = () => {
  return (
    <div className="header">
      <div className="flex flex-col gap-2 text-white absolute top-1/3">
        <MdOutlineHorizontalRule className="skew-y-[45deg] text-5xl"/>
        <MdOutlineHorizontalRule className="skew-y-[45deg] text-5xl"/>
        <MdOutlineHorizontalRule className="skew-y-[45deg] text-5xl"/>
        <MdOutlineHorizontalRule className="skew-y-[45deg] text-5xl"/>
        <MdOutlineHorizontalRule className="skew-y-[45deg] text-5xl"/>
      </div>
      <section className="text-white flex flex-col z-20 paddingX paddingY">
        <div className="flex mt-24 items-center justify-between paddingX ">
          <div className="flex flex-col  items-start">
            <h1 className="font-semibold text-gray-500 text-3xl">
              MERN-stack developer
            </h1>
            <p className="text-8xl font-extrabold font-Montserrat mt-8 mb-1">
              SHAKIL
            </p>
            <p className="text-8xl font-extrabold font-Montserrat">HOSSAIN</p>
            <div className="mt-10 flex justify-between gap-40 items-start">
              <div className=" border-r-0 border-t-0 border-b-0 border-l-1 pl-8 py-2 border text-xl font-semibold text-gray-500">
                <p>I am MERN-stack</p>
                <p>developer work remotely</p>
                <p>from Bangladesh</p>
              </div>
              <div className="my-5 text-white">
                <a
                  href={CV}
                  download
                  className="cursor-pointer bg-pink-700 flex flex-col  py-4 px-8 pulse-anim play-icon items-center gap-1"
                >
                  <FaDownload className="text-3xl" />
                  <p className="text-3xl font-bold">CV</p>
                </a>
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
                <div className="w-[10px] h-[10px] rounded-full bg-secondary mb-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
