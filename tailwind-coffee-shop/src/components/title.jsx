const TitleComponent = ({ titleTxt }) => {
  return (
    <div className="sub-headline">
      <div className="sub-headline-deco-line"></div>
      <div className="sub-headline-label">{titleTxt}</div>
      <div className="sub-headline-deco-line"></div>
    </div>
  );
};

export default TitleComponent;
