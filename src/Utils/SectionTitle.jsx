/* eslint-disable react/prop-types */
const SectionTitle = ({title}) => {
  return (
    <div>
      <h1 className="text-5xl paddingX relative font-bold text-center my-5 font-Montserrat">
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
