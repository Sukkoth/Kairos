import MobileContainer from "../../ui/MobileContainer";
import Form from "../Register/Form";

function Register() {
  return (
    <MobileContainer>
      <section className='min-h-[100dvh] text-center pt-20 px-3'>
        <h1 className='text-4xl font-bold'>Welcome!👋</h1>
        <p className='mt-3 text-gray-500'>
          Enter your details below to register
        </p>
        <Form />
      </section>
    </MobileContainer>
  );
}

export default Register;
