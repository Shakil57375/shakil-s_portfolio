import SectionTitle from "../Utils/SectionTitle";
import { FaCode, FaPencilRuler } from "react-icons/fa";
import { Tilt } from "react-tilt";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Services = () => {
  useEffect(() => {
    AOS.init({
      duration:1200,
    });
  }, []);
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 15, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    scale: 1, // Set the scale to 1 to remove the scaling effect
  };

  // };
  return (
    <section  id="services">
      <div className="mb-20">
        <SectionTitle title={"What I do?"}></SectionTitle>
      </div>
      <div data-aos="fade-zoom-in" className="grid lg:grid-cols-2 grid-cols-1 gap-10 paddingX mt-10">
        <Tilt lg:options={defaultOptions}>
          <div  className="bg-transparent shadow-lg hover:-translate-y-2 hover:-translate-x-2 rounded-lg lg:h-[530px] h-full overflow-hidden border-2 hover:shadow-xl transform transition duration-300 p-6 ease-in-out">
            <div className="bg-[#1b1e21] rounded-xl w-28 h-28 flex items-center justify-center p-5">
              <FaCode className="text-cyan-500 w-12 h-12 " />
            </div>
            <div>
              <h2 className="text-3xl font-medium my-4 font-Montserrat">
                Marne Stack Development
              </h2>
              <p className="text-base font-poppins text-justify">
                I am a highly skilled Front-End Developer proficient in HTML,
                CSS, JavaScript (including ES6), and frameworks like React.js.
                With expertise in libraries like Bootstrap, React Bootstrap,
                Tailwind CSS, and DaisyUI, I create visually appealing and
                responsive web applications. I also have knowledge of
                Express.js, Node.js, MongoDB, and Firebase authentication for
                backend development. Utilizing tools like Git, GitHub, Visual
                Studio Code, Vercel, and Figma, I streamline my development
                process. My focus on clean and maintainable code, attention to
                detail, and dedication to delivering exceptional user
                experiences set me apart. I collaborate effectively with
                designers, backend developers, and stakeholders, translating
                design mockups into functional websites and applications. With a
                deep understanding of modern web technologies, commitment to
                excellence, and passion for user experience, I am an asset for
                impactful web development projects.
              </p>
            </div>
          </div>
        </Tilt>
        <Tilt options={defaultOptions}>
          <div  className="bg-transparent lg:h-[530px] h-full shadow-lg hover:-translate-y-2 hover:-translate-x-2 rounded-lg overflow-hidden border-2 hover:shadow-xl transform transition duration-300 p-6 ease-in-out">
            <div className="bg-[#1b1e21] rounded-xl w-28 h-28 flex items-center justify-center p-5">
              <FaPencilRuler className="text-cyan-500 w-12 h-12 " />
            </div>
            <div>
              <h2 className="text-3xl font-medium my-4 font-Montserrat">
                Graphics Design
              </h2>
              <p className="text-base font-poppins text-justify ">
                With extensive experience in designing business cards, Facebook
                cover pages, Instagram cover pages, logos, roll-up banners, and
                various other design elements, [Your Name] can transform your
                ideas into stunning visuals that effectively communicate your
                brands message. Whether you are a small startup or an
                established business, [Your Name] understands the importance of
                crafting unique and memorable designs that resonate with your
                target audience.
              </p>
            </div>
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default Services;
