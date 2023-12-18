import SectionTitle from "../Utils/SectionTitle";
import Arrow from "./Arrow";
const Skills = () => {
  return (
    <div className="paddingX paddingY flex items-center gap-20">
      <div>
        <SectionTitle
          titleFirstWord={"My Skills"}
          titleFirstClassName={"text-7xl text-white font-bold"}
          divClassName={"relative top-10"}
        ></SectionTitle>
      </div>
      <div className="items-start relative top-12">
        <Arrow/>
      </div>
    </div>
  );
};

export default Skills;
