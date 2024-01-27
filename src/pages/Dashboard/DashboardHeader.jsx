import { IoSettingsOutline } from "react-icons/io5";
import Header from "../../ui/PagesHeader";
import { useSelector } from "react-redux";

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
            onClick={() => {
              localStorage.removeItem("user");
              location.href = "/";
            }}
          />
        }
        rightIcon={<IoSettingsOutline className='text-2xl' />}
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

export default DashboardHeader;
