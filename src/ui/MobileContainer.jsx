import PropTypes from "prop-types";

function MobileContainer({ children }) {
  return <section className='max-w-[650px] mx-auto'>{children}</section>;
}

MobileContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object) || PropTypes.object,
};

export default MobileContainer;
