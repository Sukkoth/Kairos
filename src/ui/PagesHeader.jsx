import PropTypes from "prop-types";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Header({ leftIcon, leftIconLink, rightIcon, title }) {
  const navigate = useNavigate();
  return (
    <header className='flex justify-between items-center'>
      <div className='text-2xl text-white bg-stone-800 p-3 rounded-full cursor-pointer hover:bg-stone-700 transition-colors duration-200'>
        {leftIcon || (
          <IoArrowBack
            onClick={() =>
              leftIconLink ? navigate(leftIconLink) : navigate(-1)
            }
          />
        )}
      </div>
      <h1 className='text-2xl font-bold'>{title || "Title here"}</h1>
      {rightIcon ? (
        <div className='text-2xl text-white bg-stone-800 p-3 rounded-full cursor-pointer hover:bg-stone-700 transition-colors duration-200'>
          {rightIcon}
        </div>
      ) : (
        <div></div>
      )}
    </header>
  );
}

Header.propTypes = {
  leftIcon: PropTypes.element,
  leftIconLink: PropTypes.string,
  rightIcon: PropTypes.element,
  title: PropTypes.string.isRequired,
};

export default Header;
