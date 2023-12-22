import Banner from "./Banner";
import AboutMe from "./AboutMe";
import FloatingNav from "../FloatingNav/FloatingNav";
import Projects from "./Projects";
import Contact from "./Contact";
import BottomToTop from "./BottomToTop";
import Skills from "./Skills";
import Blogs from "./Blogs";
import { useState } from "react";
import "./Main.css"

const Main = () => {
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });
  const [expand, setExpand] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPosition({
      top: e.pageY - 10,
      left: e.pageX - 10,
    });
  };

  const handleMouseClick = () => {
    setExpand(true);

    setTimeout(() => {
      setExpand(false);
    }, 500);
  };

  return (
    <div className="">
      <div
        className={`cursor ${expand ? "expand" : ""}`}
        style={{
          top: `${cursorPosition.top}px`,
          left: `${cursorPosition.left}px`,
        }}
      ></div>

      <div onMouseMove={handleMouseMove} onClick={handleMouseClick}>
        <FloatingNav />
        <Banner />
        <AboutMe />
        <Skills />
        <Projects />
        <Blogs />
        <Contact />
        <BottomToTop />
      </div>
    </div>
  );
};

export default Main;
