import { BiCategory } from "react-icons/bi";
import { FaCalendarDays } from "react-icons/fa6";

import Header from "../../ul/PagesHeader";
import MobileContainer from "../../ul/MobileContainer";

function TaskDetails() {
  return (
    <section className='mt-8 px-3'>
      <Header title='Task Details' />
      <MobileContainer>
        <div className='mt-5'>
          <h1 className='text-2xl text-white mb-3'>App Design</h1>
          <p className='font-normal text-sm text-start text-stone-400 leading-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            rerum nesciunt id officia, iure numquam qui, minus mollitia,
            pariatur porro alias quaerat repudiandae iusto quam recusandae!
            Totam excepturi quia ad expedita distinctio quibusdam error delectus
            amet obcaecati quasi eius ipsam, veniam saepe veritatis nihil non
            natus aspernatur suscipit nobis magni?
          </p>

          <div className='mt-7 font-semibold text-sm space-y-4'>
            <div className='flex gap-3 items-center'>
              <FaCalendarDays className='text-primary-green text-xl' />
              <p>Mon, 4 May 2022 - Wed, 5 June 2022</p>
            </div>
            <div className='flex gap-3 items-center'>
              <BiCategory className='text-primary-green text-xl' />
              <p>UI/UX Design</p>
            </div>
          </div>
        </div>
      </MobileContainer>
    </section>
  );
}

export default TaskDetails;
