/* eslint-disable react/prop-types */
const SectionTitle = ({
  titleFirstWord,
  titleSecondWord,
  divClassName,
  titleFirstClassName,
  titleSecondWordClassName,
}) => {
  return (
    <div className={`${divClassName}`}>
      <h1 className={`${titleFirstClassName}`}>{titleFirstWord}</h1>
      <h1 className={`${titleSecondWordClassName}`}>{titleSecondWord}</h1>
    </div>
  );
};

export default SectionTitle;
