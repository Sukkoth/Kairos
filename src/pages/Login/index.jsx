import Form from "./Form";
import MobileContainer from "../../ul/MobileContainer";

function Login() {
  return (
    <MobileContainer>
      <section className='min-h-[100dvh] text-center pt-20 px-3'>
        <h1 className='text-4xl font-bold'>Hello!👋</h1>
        <p className='mt-3 text-gray-500'>Enter your details below</p>
        <Form />
      </section>
    </MobileContainer>
  );
}

export default Login;
