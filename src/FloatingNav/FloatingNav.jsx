/* eslint-disable react/no-unescaped-entities */
import { FaHome, FaUser, FaChartLine } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { Link } from "react-scroll";
import "./floatingNav.css";
import { useState } from "react";
import Button from "../Components/Button";

const FloatingNav = () => {
  const [activeNav, setActiveNav] = useState();
  
  return (
    <div>
      <nav className="navbar gap-5 fixed w-full paddingX z-50 top-2 h-16">
        <div className="navbar-start z-50">
          <Link to="/" className="">
            <img
              src="https://i.ibb.co/9nSc8zm/shakil-s-logo.png"
              alt="logo"
              className="w-20 h-16 cursor-pointer  object-contain"
            />
          </Link>
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
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className={activeNav === "services" ? "active" : ""}
            onClick={() => setActiveNav("services")}
          >
            <RiServiceLine />
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
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className={activeNav === "contact" ? "active" : ""}
            onClick={() => setActiveNav("contact")}
          >
            <MdConnectWithoutContact />
          </Link>
        </div>
        <div className="navbar-end flex gap-5">
          <Button>Let's Talk</Button>
        </div>
      </nav>
    </div>
  );
};

export default FloatingNav;
