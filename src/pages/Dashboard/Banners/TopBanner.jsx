import { BiRotateLeft } from "react-icons/bi";
import { BsArrowUpRightCircle } from "react-icons/bs";

function TopBanner() {
  return (
    <div className='bg-cyan w-full rounded-2xl p-5 py-7 mt-5'>
      <div className='bg-white rounded-full w-fit p-1'>
        <BiRotateLeft color='black' className='text-4xl' />
      </div>
      <div className='mt-5'>
        <div>
          <h3 className='text-black'>Ongoing</h3>

          <div className='flex justify-between'>
            <p className='text-gray-600 text-sm'>13 items</p>
            <div>
              <BsArrowUpRightCircle className='text-2xl' color='black' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
