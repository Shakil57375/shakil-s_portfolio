/* eslint-disable react/prop-types */
const SectionTitle = ({title}) => {
  return (
    <div>
      <h1 className="text-5xl paddingX relative font-bold text-center z-40 font-Montserrat">
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
