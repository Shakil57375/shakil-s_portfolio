/* eslint-disable react/prop-types */
import "./GradientBackground.css";
const GradientBackground = ({className}) => {
  return (
    <div className={`glow-bg-2 rounded-br-full absolute w-96 h-96 hidden lg:block ${className}`}></div>
  );
};

export default GradientBackground;
