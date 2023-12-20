import Banner from "./Banner";
import AboutMe from "./AboutMe";
import FloatingNav from "../FloatingNav/FloatingNav";
import Projects from "./Projects";
import Contact from "./Contact";
import BottomToTop from "./BottomToTop";
import Skills from "./Skills";
import Blogs from "./Blogs";

const Main = () => {
  return (
    <div className="">
      <FloatingNav />
      {/* //Todo : uncomment banner */}
      {/* <Banner /> */}
      {/* <AboutMe /> */}
      <Skills />
      {/* <Projects /> */}
      <Blogs />
      {/* <Contact /> */}
      <BottomToTop />
    </div>
  );
};

export default Main;
