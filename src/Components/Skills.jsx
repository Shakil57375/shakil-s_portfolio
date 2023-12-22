import SectionTitle from "../Utils/SectionTitle";
import Arrow from "./Arrow";
import GradientBackground from "./GradientBackground";
const Skills = () => {
  return (
    <div id="skills" className="paddingX paddingY relative h-fit pb-12">
      <div className="flex items-center gap-20 ">
        <div>
          <SectionTitle
            titleFirstWord={"My Skills"}
            titleFirstClassName={
              "text-8xl text-white font-bold font-Montserrat"
            }
            divClassName={"relative top-10"}
          ></SectionTitle>
        </div>
        <div className="items-start relative top-10  hidden lg:block">
          {/* <span className=" text-white text-8xl h-10 ">&#8592;</span> */}
          <Arrow />
        </div>
      </div>
      <GradientBackground
        className={`absolute top-80 left-4 bg-purple-700 blur-[120px] w-96 h-80 opacity-40`}
      />
      <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-10 gap-0">
        <div className="mt-32 flex flex-col gap-5">
          <div className="flex gap-16 lg:gap-[120px] items-center">
            <p className="text-2xl font-semibold text-white">HTML</p>
            <div className="flex gap-2 lg:gap-4">
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
            </div>
          </div>
          <div className="flex gap-[86px] lg:gap-36  items-center">
            <p className="text-2xl font-semibold text-white">CSS</p>
            <div className="flex gap-2 lg:gap-4">
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
            </div>
          </div>
          <div className="flex gap-10 lg:gap-24 items-center">
            <p className="text-2xl font-semibold text-white">Tailwind</p>
            <div className="flex gap-2 lg:gap-4">
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
            </div>
          </div>
          <div className="flex gap-6 lg:gap-20 items-center">
            <p className="text-2xl font-semibold text-white">Javascript</p>
            <div className="flex gap-2 lg:gap-4">
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
            </div>
          </div>
          <div className="flex gap-[72px] lg:gap-32 items-center">
            <p className="text-2xl font-semibold text-white">React</p>
            <div className="flex gap-2 lg:gap-4">
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
            </div>
          </div>
        </div>
        <div className="mt-32 flex flex-col gap-5">
          <div className="flex gap-[80px] lg:gap-[136px] items-center">
            <p className="text-2xl font-semibold text-white">Node</p>
            <div className="flex gap-2 lg:gap-4">
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
            </div>
          </div>
          <div className="flex gap-[59px]  lg:gap-[115px] items-center">
            <p className="text-2xl font-semibold text-white">Express</p>
            <div className="flex gap-2 lg:gap-4">
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
            </div>
          </div>
          <div className="flex gap-[28px] lg:gap-[84px] items-center">
            <p className="text-2xl font-semibold text-white">MongoDB</p>
            <div className="flex gap-2 lg:gap-4">
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
            </div>
          </div>
          <div className="flex gap-[64px] lg:gap-[120px] items-center">
            <p className="text-2xl font-semibold text-white">Next.js</p>
            <div className="flex gap-2 lg:gap-4">
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
            </div>
          </div>
          <div className="flex gap-[27px] lg:gap-[84px] items-center">
            <p className="text-2xl font-semibold text-white">Typescript</p>
            <div className="flex gap-2 lg:gap-4">
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-rose-500"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
