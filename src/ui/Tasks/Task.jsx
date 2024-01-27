import PropTypes from "prop-types";
import { useState, useRef, useEffect, useCallback } from "react";

import { BsClock } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";
import { Link } from "react-router-dom";

const matchTypeWithColor = {
  ongoing: "cyan",
  pending: "magenda",
  canceled: "primary-orange",
  completed: "primary-green",
};

function Task({ id, type, title, startTime, endTime }) {
  const [showMenu, setShowMenu] = useState(false);
  const divRef = useRef();

  const handleClickOutsideMenu = useCallback(
    (e) => {
      if (e.target.id === `toggleMenu${id}`) return;
      if (!divRef.current.contains(e.target)) {
        return setShowMenu(false);
      }
    },
    [id]
  );

  useEffect(() => {
    if (!showMenu) return;
    document.addEventListener("click", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("click", handleClickOutsideMenu);
    };
  }, [showMenu, handleClickOutsideMenu]);

  return (
    <div className='bg-stone-800 rounded-2xl flex relative'>
      <div
        className={`w-2 bg-${matchTypeWithColor[type]} min-h-full rounded-l-2xl`}
      ></div>
      <div className='relative w-full'>
        <div
          className='p-3 absolute right-5 top-5 cursor-pointer hover:text-stone-400 text-lg'
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <SlOptionsVertical id={`toggleMenu${id}`} className='' />
        </div>
        {showMenu && (
          <div
            ref={divRef}
            className='absolute right-6 top-10  bg-black py-3 font-normal rounded-lg px-3 select-none z-20'
          >
            <ul className='space-y-1'>
              <li className='cursor-pointer hover:bg-stone-800 w-full py-1 px-3 rounded-lg'>
                <Link to={`/tasks/123456`}> View Details</Link>
              </li>
              <li className='cursor-pointer hover:bg-stone-800 w-full py-1 px-3 rounded-lg'>
                <Link>Edit</Link>
              </li>
              <li className='cursor-pointer hover:bg-stone-800 w-full py-1 px-3 rounded-lg'>
                Delete
              </li>
            </ul>
          </div>
        )}
        <div className='p-5'>
          <h3
            className={`bg-${matchTypeWithColor[type]} px-4 py-2 text-black w-fit rounded-2xl font-semibold capitalize`}
          >
            {type}
          </h3>

          <h2 className='text-2xl mt-3'>{title}</h2>

          <div className='flex gap-3 items-center mt-2 text-sm'>
            <BsClock />
            <p>
              {startTime} - {endTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
};

export default Task;
