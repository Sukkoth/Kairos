import { IoSettingsOutline } from "react-icons/io5";
import Header from "../../ui/PagesHeader";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { logOutUser } from "../../redux/features/Auth";

function DashboardHeader() {
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      <Header
        title='Kairos - Task Manager 🎉'
        leftIcon={
          <img
            src='/images/avatar.jpg'
            alt=''
            className='size-10 rounded-full'
          />
        }
        rightIcon={<RightIcon />}
      />

      <h3 className='mt-10 '>
        <span className='text-gray-500'> Hi,</span> <br />{" "}
        <span className='text-2xl'>
          {user.firstName} {user.lastName}
        </span>
      </h3>
    </>
  );
}

function RightIcon() {
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logOutUser());
  }
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='relative' onClick={() => setShowMenu((prev) => !prev)}>
      <IoSettingsOutline className='text-2xl' />
      {showMenu && (
        <div className='text-sm absolute left-[-6rem] top-10 bg-stone-800 px-3 py-2 rounded-xl space-y-2 flex flex-col'>
          <Link
            className='hover:bg-stone-700 px-7 py-1 rounded-xl'
            onClick={handleLogout}
          >
            Logout
          </Link>
          <Link className='hover:bg-stone-700 px-7 py-1 rounded-xl'>
            Settings
          </Link>
        </div>
      )}
    </div>
  );
}
export default DashboardHeader;
