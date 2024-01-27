import { FaRegCircleCheck } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { selectByType } from "../../../redux/features/tasks/taskSlice";

function Completed() {
  const completed = useSelector(selectByType("completed"));
  return (
    <div className='bg-primary-green mt-3 rounded-2xl flex flex-row justify-between py-6 px-2'>
      <div>
        <h3>Completed</h3>
        <p className='text-gray-600 text-sm'>{completed?.length || 0} items</p>
      </div>
      <div className='bg-white rounded-full h-fit w-fit p-1'>
        <FaRegCircleCheck className='text-2xl' color='black' />
      </div>
    </div>
  );
}

export default Completed;
