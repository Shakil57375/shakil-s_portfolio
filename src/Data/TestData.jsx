/* eslint-disable react/no-unescaped-entities */
import { FaGithub } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import SectionTitle from "../Utils/SectionTitle";
import "./projects.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const TestData = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div data-aos="fade-zoom-in" id="projects">
      <div>
        <SectionTitle title={"Projects"}></SectionTitle>
      </div>
      <div className="my-20 paddingX">
        <div className="container grid lg:grid-cols-2 grid-cols-1 gap-20">
          <div className="lg:p-10 p-3">
            <p className="text-cyan-500 font-bold text-5xl mb-3">
              My Latest <br /> Works
            </p>
            <p className="text-base font-Poppins ">
              I have completed multiple project in recent time here are some of
              my latest project that I have done. On Marne stack I have used
              multiple technologies in those projects such as React.js,
              React-Router, React-hook-from, Tailwind CSS, firebase
              authentication, daisyUI, NodeJS, ExpressJS, Stripe(payment method)
              etc.
            </p>
          </div>
          <div className="project mt-12 flex flex-col  gap-8  project   shadow-lg lg:hover:-translate-y-2 lg:hover:-translate-x-2 sm:hover:-translate-y-0 sm:hover:-translate-x-0 rounded-lg overflow-hidden hover:shadow-xl relative lg:transform sm:transform-none lg:transition sm:transition-none sm:duration-0 lg:duration-300 p-6 ease-in-out pb-5">
            <div className="box box1"></div>
            <div>
              <li>
                This is a recipe hunter website where you can choose your
                desired recipe.
              </li>
              <li>
                On this website, you will find the top most-rated chef in
                Bangladesh and their best recipes. If you want you can see the
                recipes of the best chefs in Bangladesh but you have to login in
                for that.
              </li>
              <li>
                On the details page of a chef, you can see detailed information
                about the chef you clicked on and his recipes.
              </li>
            </div>
            <div className="links  top-20 right-0">
              <div className="flex flex-col gap-5">
                <a
                  target="_blank"
                  href="https://assignment-ten-1b552.web.app/"
                  rel="noreferrer"
                >
                  <MdOutlineLiveTv className=" w-8 h-8 text-red-500" />
                  <span className="text-black">Go Live</span>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Shakil57375/chef-hunter-client"
                >
                  <FaGithub className="w-8 h-8" />
                  <span className="text-black">Client</span>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Shakil57375/chef-hunter-server"
                >
                  <FaGithub className=" w-8 h-8" />
                  <span className="text-black">Server</span>
                </a>
              </div>
            </div>
          </div>
          <div className="project mt-12 flex flex-col  gap-8  project   shadow-lg lg:hover:-translate-y-2 lg:hover:-translate-x-2 sm:hover:-translate-y-0 sm:hover:-translate-x-0 rounded-lg overflow-hidden hover:shadow-xl relative lg:transform sm:transform-none lg:transition sm:transition-none sm:duration-0 lg:duration-300 p-6 ease-in-out pb-5">
            <div className="box box2"></div>
            <div>
              <li>This is a toy generator website that includes sports toys</li>
              <li>
                On this website, anyone can explore many kinds of sports toys.
                They can see all the toys.
              </li>
              <li>
                If someone registers or login to the website he/she can add a
                toy and see his added toy, he/she can update and delete his/her
                toys and he/she can also see all the toys other admin added in
                all toys page and can see the details of the toys
              </li>
            </div>
            <div className="links top-20 right-0">
              <div className="flex flex-col gap-5">
                <a
                  target="_blank"
                  href="https://sports-academy-special.web.app/"
                  rel="noreferrer"
                >
                  <MdOutlineLiveTv className=" w-8 h-8 text-red-500" />
                  <span className="text-black">Go Live</span>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Shakil57375/sports-academy-client"
                >
                  <FaGithub className="w-8 h-8" />
                  <span className="text-black">Client</span>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Shakil57375/sports-academy-server"
                >
                  <FaGithub className=" w-8 h-8" />
                  <span className="text-black">Server</span>
                </a>
              </div>
            </div>
          </div>
          <div className=" project mt-12 flex flex-col  gap-8  project   shadow-lg lg:hover:-translate-y-2 lg:hover:-translate-x-2 sm:hover:-translate-y-0 sm:hover:-translate-x-0 rounded-lg overflow-hidden hover:shadow-xl relative lg:transform sm:transform-none lg:transition sm:transition-none sm:duration-0 lg:duration-300 p-6 ease-in-out pb-5">
            <div className="box box3"></div>
            <div className="mt-3">
              <li>
                This is a full-stack website for summer camps where students can
                learn various kinds of sports in a sports academy. They can
                choose the best instructor's classes to learn their desired
                sports and they can select the classes and enroll in them by
                paying money for them with the stripe.
              </li>
              <li>
                On this website, A user can be an Admin and instructor as well.
              </li>
              <li>
                An instructor can add his classes and see his classes as well
                and if the admin approves or deny any of his classes they can
                see the feedback and they can see how many students have
                enrolled in their classes an admin can manage the users and
                classes and also give feedback to the instructors
              </li>
            </div>
            <div className="links top-20 right-0">
              <div className="flex flex-col gap-5">
                <a
                  target="_blank"
                  href="https://assignment-eleven-7252c.web.app/"
                  rel="noreferrer"
                >
                  <MdOutlineLiveTv className=" w-8 h-8 text-red-500" />
                  <span className="text-black">Go Live</span>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Shakil57375/toy-generator-client"
                >
                  <FaGithub className="w-8 h-8" />
                  <span className="text-black">Client</span>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Shakil57375/toy-generator-server"
                >
                  <FaGithub className=" w-8 h-8" />
                  <span className="text-black">Server</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestData;
