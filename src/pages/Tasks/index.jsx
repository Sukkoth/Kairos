import Calendar from "./Calendar";
import Header from "../../ui/PagesHeader";
import TasksList from "../../ui/Tasks";
import { BsPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import MobileContainer from "../../ui/MobileContainer";

function Tasks() {
  const navigate = useNavigate();
  return (
    <section className='px-3 mt-8'>
      <Header
        title='Tasks List'
        rightIcon={<BsPlus onClick={() => navigate("/add")} />}
      />
      <MobileContainer>
        <Calendar />
        <TasksList />
      </MobileContainer>
    </section>
  );
}

export default Tasks;
