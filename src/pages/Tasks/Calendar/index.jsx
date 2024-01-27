import { useSelector } from "react-redux";

function Calendar() {
  const date = new Date();
  const tasks = useSelector((state) => state.tasks.tasks.length);
  return (
    <div className='mt-10'>
      <h1 className='text-2xl text-white'>
        {date.toLocaleString("en-US", { month: "long" })} {date.getDay()}
      </h1>
      <p className='text-sm mt-2'>
        {tasks || "No"} work{tasks > 1 ? "s" : ""} today
      </p>
    </div>
  );
}

export default Calendar;
