import MobileContainer from "../../ul/MobileContainer";
import Header from "../../ul/PagesHeader";
import FormContainer from "./FormContainer";

function AddTask() {
  return (
    <section className='mt-8 px-3'>
      <Header title='Create Task' />
      <MobileContainer>
        <FormContainer />
      </MobileContainer>
    </section>
  );
}

export default AddTask;
