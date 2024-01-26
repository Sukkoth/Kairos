import { FaRegCircleCheck } from "react-icons/fa6";

function Completed() {
  return (
    <div className='bg-primary-green mt-3 rounded-2xl flex flex-row justify-between py-6 px-2'>
      <div>
        <h3>Completed</h3>
        <p className='text-gray-600 text-sm'>13 items</p>
      </div>
      <div className='bg-white rounded-full h-fit w-fit p-1'>
        <FaRegCircleCheck className='text-2xl' color='black' />
      </div>
    </div>
  );
}

export default Completed;
