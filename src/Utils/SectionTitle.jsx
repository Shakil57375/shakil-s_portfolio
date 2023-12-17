/* eslint-disable react/prop-types */
const SectionTitle = ({titleFirstWord, titleSecondWord, divClassName}) => {
  return (
    <div className={`${divClassName}`}>
      <h1 className="text-5xl paddingX relative font-bold text-center z-40 font-Montserrat">
        {titleFirstWord}
      </h1>
      <h1 className="text-5xl paddingX relative font-bold text-center z-40 font-Montserrat">
        {titleSecondWord}
      </h1>
    </div>
  );
};

export default SectionTitle;
