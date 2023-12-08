import { FaHome, FaUser, FaChartLine } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { Link } from "react-scroll";
import "./floatingNav.css";
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const FloatingNav = () => {
      useEffect(() => {
    AOS.init({
      duration:1200,
    });
  }, []);
  const [activeNav, setActiveNav] = useState();
  return (
    <div >
      <nav className="flex gap-5 fixed">
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
      </nav>
    </div>
  );
};

export default FloatingNav;
