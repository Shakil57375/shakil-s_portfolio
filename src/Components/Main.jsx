import Banner from "./Banner";
import AboutMe from "./AboutMe";
import FloatingNav from "../FloatingNav/FloatingNav";
import Projects from "./Projects";
import Contact from "./Contact";
import BottomToTop from "./BottomToTop";
import Skills from "./Skills";

const Main = () => {
  return (
    <div className="">
      <FloatingNav />
      {/* //Todo : uncomment banner */}
      {/* <Banner /> */}
      {/* <AboutMe /> */}
      <Skills />
      {/* <Projects /> */}
      {/* <Contact /> */}
      <BottomToTop />
    </div>
  );
};

export default Main;
