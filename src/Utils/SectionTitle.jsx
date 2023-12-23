import RevealAnimation from "../Components/Animation/RevealAnimation";

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
      <RevealAnimation>
        <h1 className={`${titleFirstClassName}`}>{titleFirstWord}</h1>
        <h1 className={`${titleSecondWordClassName}`}>{titleSecondWord}</h1>
      </RevealAnimation>
    </div>
  );
};

export default SectionTitle;
