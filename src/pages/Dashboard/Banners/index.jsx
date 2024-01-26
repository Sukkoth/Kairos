import Cancel from "./Cancel";
import Completed from "./Completed";
import Pending from "./Pending";
import TopBanner from "./TopBanner";

function Banners() {
  return (
    <>
      <TopBanner />
      <div className='flex flex-row gap-3 text-black w-full'>
        <div className='flex flex-col w-full mt-3'>
          <Pending />
          <Completed />
        </div>
        <Cancel />
      </div>
    </>
  );
}

export default Banners;
