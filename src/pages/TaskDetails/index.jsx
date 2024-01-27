import { BiCategory } from "react-icons/bi";
import { GrInProgress } from "react-icons/gr";
import { FaCalendarDays } from "react-icons/fa6";
import Header from "../../ui/PagesHeader";
import MobileContainer from "../../ui/MobileContainer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  taskByIdSelector,
  updateTask,
} from "../../redux/features/tasks/taskSlice";
import { useState } from "react";

const categories = [
  {
    id: 1,
    name: "Brand and Logo Design",
  },
  {
    id: 2,
    name: "Web Development",
  },
  {
    id: 3,
    name: "Digital Marketing",
  },
  {
    id: 4,
    name: "Graphic Design",
  },
  {
    id: 5,
    name: "Photography",
  },
  {
    id: 6,
    name: "Video Production",
  },
  {
    id: 7,
    name: "Content Writing",
  },
  {
    id: 8,
    name: "Mobile App Development",
  },
  {
    id: 9,
    name: "UI/UX Design",
  },
  {
    id: 10,
    name: "E-commerce",
  },
];

function TaskDetails() {
  const dispatch = useDispatch();
  const { taskId } = useParams();
  const fetchedData = useSelector(taskByIdSelector(taskId));
  const task = fetchedData.length > 0 ? fetchedData[0] : null;
  const [type, setType] = useState(task.type);

  function handleTypeChange(setToType) {
    setType(setToType);
    const body = {
      data: { ...task, type: setToType },
      id: task.id,
    };
    dispatch(updateTask(body));
  }
  return (
    <section className='mt-8 px-3'>
      <Header title='Task Details' />
      <MobileContainer>
        <div className='mt-5'>
          <h1 className='text-2xl text-white mb-3'>{task.title}</h1>
          <p className='font-normal text-sm text-start text-stone-400 leading-6'>
            {task.description}
          </p>

          <div className='mt-7 font-semibold text-sm space-y-4'>
            <div className='flex gap-3 items-center'>
              <FaCalendarDays className='text-primary-green text-xl' />
              <p>
                {new Date(JSON.parse(task.startDate)).toDateString()} -{" "}
                {new Date(JSON.parse(task.endDate)).toDateString()}
              </p>
            </div>
            <div className='flex gap-3 items-center'>
              <BiCategory className='text-primary-green text-xl' />
              <div>
                {task.categories.map((category) => (
                  <p key={category}>
                    {categories.filter((c) => c.id === category)?.[0].name},
                  </p>
                ))}
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <GrInProgress className='text-primary-green text-xl' />

              <label htmlFor='status'>Set status to: </label>
              <select
                name='status'
                id='status'
                className='py-4 bg-input-bg px-4 rounded-xl placeholder:text-stone-500  focus:outline-stone-800 active:outline-stone-800 outline-none w-1/2'
                value={type}
                onChange={(e) => handleTypeChange(e.target.value)}
              >
                <option value='ongoing'>Ongoing</option>
                <option value='pending'>Pending</option>
                <option value='canceled'>Canceled</option>
                <option value='completed'>Completed</option>
              </select>
            </div>
          </div>
        </div>
      </MobileContainer>
    </section>
  );
}

export default TaskDetails;
