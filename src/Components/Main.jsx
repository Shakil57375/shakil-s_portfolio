import Banner from "./Banner";
import AboutMe from "./AboutMe";
import Services from "./Services";
import Skills from "./Skills";
import FloatingNav from "../FloatingNav/FloatingNav";
import Projects from "./Projects";
import Contact from "./Contact";
import BottomToTop from "./BottomToTop";

const Main = () => {
  return (
    <div className="">
        
        <FloatingNav/>
        <Banner />
        <AboutMe />
        <Services/>
        <Skills/>
        <Projects/>
        <Contact/>
        <BottomToTop/>
    </div>
  );
};

export default Main;