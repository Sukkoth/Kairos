import { PiDotsThreeCircle } from "react-icons/pi";

function Pending() {
  return (
    <div className='bg-magenda rounded-2xl flex flex-row justify-between py-6 px-2'>
      <div>
        <h3>Pending</h3>
        <p className='text-gray-600 text-sm'>13 items</p>
      </div>
      <div className='bg-white rounded-full h-fit w-fit p-1'>
        <PiDotsThreeCircle className='text-2xl' color='black' />
      </div>
    </div>
  );
}

export default Pending;
