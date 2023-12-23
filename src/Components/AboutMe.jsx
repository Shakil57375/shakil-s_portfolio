import "./aboutMe.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import aboutImage from "../../src/assets/shakil_about_image.jpg";
import { useState } from "react";
import SectionTitle from "../Utils/SectionTitle";
import GradientBackground from "./GradientBackground";
import Button from "./Button";
import RevealAnimation from "./Animation/RevealAnimation";
import AnimateRight from "./Animation/AnimateRight";
const AboutMe = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <section id="about" className="bg-black z-40 relative">
      <SectionTitle
        divClassName={`flex flex-col relative lg:top-44 top-0 lg:right-48 right-0 text-white justify-start items-center z-50`}
        titleFirstWord={"About"}
        titleSecondWord={"Me"}
        titleFirstClassName={
          "text-8xl font-bold paddingX relative font-bold text-center z-40 font-Montserrat"
        }
        titleSecondWordClassName={
          "text-8xl font-bold paddingX relative font-bold text-center z-40 font-Montserrat"
        }
      ></SectionTitle>
      <div className="flex z-40 lg:flex-row flex-col-reverse items-start justify-between paddingY paddingX h-fit  w-full gap-48 relative">
        <div className=" z-30 lg:h-[700px] h-[500px]">
          <GradientBackground
            className={`absolute top-80 left-4 bg-blue-800 blur-3xl w-96 h-80 opacity-40 `}
          />
          <AnimateRight>
            <div className="relative z-30 ">
              <img
                className="about__image"
                src={aboutImage}
                alt="About Shakil"
              />
            </div>
          </AnimateRight>
          <div className="relative -top-[470px] right-8 z-10  about_bg_shape"></div>
        </div>
        <div className=" lg:p-0 text-white relative">
          <div>
            <RevealAnimation>
              <p className="text-sm font-mono mt-3 px-3">
                I am an expert in Html, CSS, Javascript, Es6, react.js,
                bootstrap, react-bootstrap, tailwind css, and daisyUi. I am
                comfortable with Mongodb, react hook form, express.js, and
                Firebase authentication. I am familiar with node.js, JWT, and
                dev tool debugging. I can also use tools like GitHub, visual
                studio code, vercel, and Figma as well. I am a Passionate and
                dedicated Front-End-Developer with a deep understanding of
                modern web technologies and a commitment to creating exceptional
                user experiences.
              </p>
            </RevealAnimation>
          </div>
          <div>
            <GradientBackground
              className={
                "absolute -top-60 right-40 bg-violet-600 blur-[150px] w-[400px] opacity-40 h-96 -skew-y-[45deg] "
              }
            />
            <GradientBackground
              className={
                "absolute top-60 right-48 bg-rose-800 blur-[120px] w-[400px] opacity-80 h-40 "
              }
            />

            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <RevealAnimation>
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
              </RevealAnimation>
            </ScrollTrigger>
            <div className="flex items-center justify-between mt-10">
              <Button>Talk with me!</Button>
              <RevealAnimation>
                <div className="flex flex-col gap-4 ">
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
