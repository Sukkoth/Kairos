import PropTypes from "prop-types";
import { useState } from "react";

function Calendar() {
  const [activeDate, setActiveDate] = useState(1);
  function handleChangeActiveDate(date) {
    setActiveDate(date);
  }

  const dates = [
    { num: 1, name: "Mon" },
    { num: 2, name: "Tue" },
    { num: 3, name: "Wed" },
    { num: 4, name: "Thu" },
    { num: 5, name: "Fri" },
    { num: 6, name: "Sat" },
    { num: 7, name: "Sun" },
    { num: 8, name: "Mon" },
    { num: 9, name: "Tue" },
    { num: 10, name: "Wed" },
    { num: 11, name: "Thu" },
    { num: 12, name: "Fri" },
    { num: 13, name: "Sat" },
    { num: 14, name: "Sun" },
    { num: 15, name: "Mon" },
    { num: 16, name: "Tue" },
    { num: 17, name: "Wed" },
    { num: 18, name: "Thu" },
    { num: 19, name: "Fri" },
    { num: 20, name: "Sat" },
    { num: 21, name: "Sun" },
    { num: 22, name: "Mon" },
    { num: 23, name: "Tue" },
    { num: 24, name: "Wed" },
    { num: 25, name: "Thu" },
    { num: 26, name: "Fri" },
    { num: 27, name: "Sat" },
    { num: 28, name: "Sun" },
    { num: 29, name: "Mon" },
    { num: 30, name: "Tue" },
  ];
  const date = new Date();
  return (
    <>
      <div className='mt-10'>
        <h1 className='text-2xl text-white'>
          {date.toLocaleString("en-US", { month: "long" })} {date.getDay()}
        </h1>
        <p className='text-sm mt-2'>6 works today</p>
      </div>

      <ul className='flex justify-between mt-8 overflow-scroll scrollbar-hide gap-5'>
        {dates.map((d) => (
          <DateNumber
            key={d.num}
            {...d}
            activeDate={activeDate}
            setActiveDate={handleChangeActiveDate}
          />
        ))}
      </ul>
    </>
  );
}

function DateNumber({ num, name, activeDate, setActiveDate }) {
  return (
    <li
      onClick={() => setActiveDate(num)}
      className={`text-center select-none p-3 cursor-pointer hover:bg-stone-800 hover:rounded-2xl relative border-transparent border  rounded-2xl ${
        activeDate === num
          ? "bg-stone-800 after:content-[' '] after:bottom-1 after:left-[45%] after:size-2 after:rounded-full  border-stone-500 after:absolute after:bg-primary-green"
          : ""
      }`}
    >
      <h1 className='text-xl'>{num}</h1>
      <h3 className='text-gray-400 font-normal '>{name}</h3>
    </li>
  );
}

DateNumber.propTypes = {
  num: PropTypes.number,
  name: PropTypes.string,
  activeDate: PropTypes.number,
  setActiveDate: PropTypes.func,
};
export default Calendar;
