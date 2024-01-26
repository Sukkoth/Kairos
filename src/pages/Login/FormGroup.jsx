import PropTypes from "prop-types";

function FormGroup({ children }) {
  return <div className='flex flex-col gap-3 mt-5'>{children}</div>;
}

FormGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
};

export default FormGroup;
