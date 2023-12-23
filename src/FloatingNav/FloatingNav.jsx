/* eslint-disable react/no-unescaped-entities */
import { FaHome, FaUser, FaChartLine } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { MdLightbulb } from "react-icons/md";
import { Link } from "react-scroll";
import "./floatingNav.css";
import { useState } from "react";
import Button from "../Components/Button";

const FloatingNav = () => {
  const [activeNav, setActiveNav] = useState();
  
  return (
      <nav  className="navbar gap-5 fixed paddingX !z-50 top-2 h-16 lg:w-11/12 w-fit !py-10">
        <div id="home" className="navbar-start !z-50 lg:block hidden">
            <img
              src="https://i.ibb.co/9nSc8zm/shakil-s-logo.png"
              alt="logo"
              className="w-20 h-16 cursor-pointer"
            />
        </div>
        <div className="navbar-center flex gap-3 z-50">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className={activeNav === "home" ? "active" : ""}
            onClick={() => setActiveNav("home")}
          >
            <FaHome />
          </Link>
          <Link
            to="about"
            spy={true}
            
            smooth={true}
            duration={500}
            className={activeNav === "about" ? "active" : ""}
            onClick={() => setActiveNav("about")}
          >
            <FaUser />
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className={activeNav === "skills" ? "active" : ""}
            onClick={() => setActiveNav("skills")}
          >
            <MdLightbulb />
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className={activeNav === "projects" ? "active" : ""}
            onClick={() => setActiveNav("projects")}
          >
            <FaChartLine />
          </Link>
          <Link
            to="blogs"
            spy={true}
            smooth={true}
            duration={500}
            className={activeNav === "blogs" ? "active" : ""}
            onClick={() => setActiveNav("blogs")}
          >
            <FaBlog />
          </Link>
          <Link
            to="directContact"
            spy={true}
            smooth={true}
            duration={500}
            className={activeNav === "directContact" ? "active" : ""}
            onClick={() => setActiveNav("directContact")}
          >
            <MdConnectWithoutContact />
          </Link>
        </div>
        <div className="navbar-end gap-5 lg:flex hidden">
          <Button targetId="directContact" >Let's Talk</Button>
        </div>
      </nav>
  );
};

export default FloatingNav;
