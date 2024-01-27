import { useSelector } from "react-redux";
import Task from "./Task";
import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
function Tasks() {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <ul className='mt-10 list-none space-y-3'>
      {tasks?.length ? (
        tasks.map((task) => (
          <li key={task.title}>
            <Task {...task} />
          </li>
        ))
      ) : (
        <div className='text-xl bg-primary-orange text-white py-2  rounded-2xl flex justify-between items-center px-5'>
          <h1> No tasks added yet 💁</h1>
          <Link to={"/add"} className='flex items-center cursor-pointer'>
            <div className='p-1 text-black border border-black rounded-full ms-3'>
              {" "}
              <BsPlus className='text-3xl' />
            </div>
          </Link>
        </div>
      )}
    </ul>
  );
}

export default Tasks;
