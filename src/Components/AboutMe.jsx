import "./aboutMe.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import aboutImage from "../../src/assets/shakil_about_image.jpg";
import { useState } from "react";
import SectionTitle from "../Utils/SectionTitle";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const AboutMe = () => {
  const [counterOn, setCounterOn] = useState(false);
  useEffect(() => {
    AOS.init({
      duration:1200,
    });
  }, []);
  return (
    <section  data-aos="fade-zoom-in" id="about">
      <div className="mb-20">
        <SectionTitle title={"About Me"}></SectionTitle>
      </div>
      <div className="flex  lg:flex-row flex-col justify-between  items-start gap-5 p-0 md:px-20 paddingY">
        <div className="lg:basis-6/12 basis-full">
          <div className="pl-0 lg:pl-24 about__image relative">
            <div className="about__image_bg"></div>
            <div className="about__image_lg">
              <img
                className="lg:w-[400px] w-full  h-[428px]"
                src={aboutImage}
                alt="About Shakil"
              />
            </div>
            <div className="about__image_sm">
              <img
                className=" w-[300px] h-[300px]"
                src={aboutImage}
                alt="About Shakil"
              />
            </div>
          </div>
        </div>
        <div className="lg:basis-6/12 basis-full lg:p-0 px-8">
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