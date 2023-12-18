import "./aboutMe.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import aboutImage from "../../src/assets/shakil_about_image.jpg";
import { useState } from "react";
import SectionTitle from "../Utils/SectionTitle";
import BallCanvas from "./BallCanvas";
const AboutMe = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <section id="about" className="bg-black z-40 relative">
      <SectionTitle
        divClassName={`flex flex-col relative top-44 right-48 text-white justify-start items-center`}
        titleFirstWord={"About"}
        titleSecondWord={"Me"}
        titleFirstClassName={
          "text-8xl font-bold paddingX relative font-bold text-center z-40 font-Montserrat"
        }
        titleSecondWordClassName={
          "text-8xl font-bold paddingX relative font-bold text-center z-40 font-Montserrat"
        }
      ></SectionTitle>
      <div className="flex z-40 lg:flex-row flex-col items-start justify-between paddingY paddingX h-[550px] w-full gap-48">
        <BallCanvas />
        <div className=" z-30">
          <div className="relative z-30">
            <img className="about__image" src={aboutImage} alt="About Shakil" />
          </div>
          <div className="relative -top-[470px] -right-8 z-10  about_bg_shape"></div>
        </div>
        <div className=" lg:p-0">
          <div>
            <h1 className="text-2xl font-medium block">
              I am a Front End Developer
            </h1>
            <p className="text-base font-normal font-Poppins mt-3">
              I am an expert in Html, CSS, Javascript, Es6, react.js, bootstrap,
              react-bootstrap, tailwind css, and daisyUi. I am comfortable with
              Mongodb, react hook form, express.js, and Firebase authentication.
              I am familiar with node.js, JWT, and dev tool debugging. I can
              also use tools like GitHub, visual studio code, vercel, and Figma
              as well. I am a Passionate and dedicated Front-End-Developer with
              a deep understanding of modern web technologies and a commitment
              to creating exceptional user experiences.
            </p>
          </div>
          <div>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <div className="grid grid-cols-3 gap-5 mt-10">
                <div className="flex flex-col">
                  <p className="text-cyan-500 text-7xl font-bold font-Marcellus">
                    {counterOn && (
                      <CountUp start={0} end={6} duration={2} delay={0} />
                    )}
                  </p>
                  <p className="text-base font-medium">
                    Front End Projects Completed
                  </p>
                </div>
                <div>
                  <p className="text-cyan-500 text-7xl font-bold font-Marcellus">
                    {counterOn && (
                      <CountUp start={0} end={4} duration={2} delay={0} />
                    )}
                  </p>
                  <p className="text-base font-medium">
                    Marne Stack Projects Completed
                  </p>
                </div>
                <div>
                  <p className="text-cyan-500 text-7xl font-bold font-Marcellus">
                    {counterOn && (
                      <CountUp start={0} end={3} duration={2} delay={0} />
                    )}
                  </p>
                  <p className="text-base font-medium">
                    Full Stack Project Completed
                  </p>
                </div>
              </div>
            </ScrollTrigger>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
