import PropTypes from "prop-types";

function MobileContainer({ children }) {
  return <section className='max-w-[650px] mx-auto'>{children}</section>;
}

MobileContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default MobileContainer;
