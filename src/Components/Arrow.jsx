import "./Arrow.css"; // Import the CSS file for additional styling if needed

const Arrow = () => {
  return (
    <div className="flex items-center">
      <div className="arrow-container">
        <div className="arrow"></div>
      </div>
      <div className="w-96 h-1 bg-white  relative right-10"></div>
    </div>
  );
};

export default Arrow;
