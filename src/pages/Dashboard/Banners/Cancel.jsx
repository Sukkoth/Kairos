import { RxCrossCircled } from "react-icons/rx";

function Cancel() {
  return (
    <div className='flex flex-col justify-between bg-primary-orange w-[45%] px-4 rounded-2xl mt-3 py-3 h-auto'>
      <div className='bg-white rounded-full h-fit w-fit p-1'>
        <RxCrossCircled className='text-2xl' color='black' />
      </div>

      <div>
        <h3 className='text-black'>Cancel</h3>
        <p className='text-gray-600 text-sm'>02 items</p>
      </div>
    </div>
  );
}

export default Cancel;
