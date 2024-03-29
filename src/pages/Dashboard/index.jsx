import Banners from "./Banners";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Tasks from "../../ui/Tasks";
import { useNavigate } from "react-router-dom";
import MobileContainer from "../../ui/MobileContainer";
import DashboardHeader from "./DashboardHeader";
import { useSelector } from "react-redux";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <section className='px-3 mt-8'>
      <DashboardHeader />
      <MobileContainer>
        <Banners />
        <div
          className='mt-10 flex justify-between cursor-pointer items-center'
          onClick={() => navigate("/tasks")}
        >
          <h1 className='text-2xl'>All Tasks</h1>
          <IoArrowForwardCircleOutline className='text-4xl' color='gray' />
        </div>
        <Tasks />
      </MobileContainer>
    </section>
  );
}

export default Dashboard;
