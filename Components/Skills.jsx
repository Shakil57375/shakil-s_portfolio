import SectionTitle from "../Utils/SectionTitle";
import Tech from "./Tech";

const Skills = () => {
  return (
    <div className="lg:my-20 my-0 ">
      <div className="mb-20">
        <SectionTitle title={"My Skills"}></SectionTitle>
      </div>
      <div>
        <div>
            <Tech/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
