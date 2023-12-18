import SectionTitle from "../Utils/SectionTitle";
import { CgArrowLongLeft } from "react-icons/cg";
import Arrow from "./Arrow";
const Skills = () => {
  return (
    <div className="paddingX paddingY flex justify-between items-center gap-10">
      <div>
        <SectionTitle
          titleFirstWord={"My Skills"}
          titleFirstClassName={"text-7xl text-white font-bold"}
          divClassName={"relative top-20"}
        ></SectionTitle>
      </div>
      <div className="items-start relative top-12">
        <Arrow/>
      </div>
    </div>
  );
};

export default Skills;
