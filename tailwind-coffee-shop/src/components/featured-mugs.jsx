import PropTypes from 'prop-types';

const FeaturedMugs = ({ title = "Featured Mugs" }) => {
  return (
    <div className="sub-headline">
      <div className="sub-headline-deco-line"></div>
      <div className="sub-headline-label">{title}</div>
      <div className="sub-headline-deco-line"></div>
    </div>
  );
};

FeaturedMugs.propTypes = {
  title: PropTypes.string
};

export default FeaturedMugs;
