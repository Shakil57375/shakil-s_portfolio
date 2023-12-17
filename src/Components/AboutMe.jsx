import "./aboutMe.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import aboutImage from "../../src/assets/shakil_about_image.jpg";
import { useState } from "react";
import SectionTitle from "../Utils/SectionTitle";
const AboutMe = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <section id="about" className="bg-black z-40 relative">
        <SectionTitle
          divClassName={`flex  relative top-20 text-cyan-600 justify-center`}
          titleFirstWord={"About"}
          titleSecondWord={"Me"}
        ></SectionTitle>
      <div className="flex z-40 lg:flex-row flex-col justify-between  items-start gap-5 p-0 md:px-20 paddingY">
        <div className="lg:basis-6/12 basis-full z-30">
          <div className="relative z-30">
            <img className="about__image" src={aboutImage} alt="About Shakil" />
          </div>
          <div className="relative -top-[470px] -right-8 z-10  about_bg_shape"></div>
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
