
// eslint-disable-next-line react/prop-types
const BallCanvas = ({ icon }) => {
  return (
    <div className="w-40 h-40 rounded-full  shadow-lg lg:hover:-translate-y-2 lg:hover:-translate-x-2 sm:hover:-translate-y-0 sm:hover:-translate-x-0 bg-white overflow-hidden hover:shadow-xl relative lg:transform sm:transform-none lg:transition sm:transition-none sm:duration-0 lg:duration-300 p-6 ease-in-out flex items-center  justify-center hover:scale-110 transform transition-transform">
    <img src={icon} className="w-28 h-28 p-2"  alt="" />
  </div>
  );
};

export default BallCanvas;
