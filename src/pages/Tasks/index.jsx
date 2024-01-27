import Calendar from "./Calendar";
import Header from "../../ui/PagesHeader";
import TasksList from "../../ui/Tasks";
import { BsPlus } from "react-icons/bs";
import MobileContainer from "../../ui/MobileContainer";

function Tasks() {
  return (
    <section className='px-3 mt-8'>
      <Header title='Tasks List' rightIcon={<BsPlus />} rightIconLink='/add' />
      <MobileContainer>
        <Calendar />
        <TasksList />
      </MobileContainer>
    </section>
  );
}

export default Tasks;
