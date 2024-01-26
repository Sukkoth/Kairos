import { Link } from "react-router-dom";
import FormGroup from "./FormGroup";

function Form() {
  function handleLogin(e) {
    e.preventDefault();
  }
  return (
    <form className='text-start' onSubmit={handleLogin}>
      <FormGroup>
        <label htmlFor='email'>E-mail</label>
        <input
          className='h-14 bg-input-bg px-4 rounded-xl placeholder:text-stone-500  focus:outline-stone-800 active:outline-stone-800 outline-none'
          type='email'
          id='email'
          name='email'
          placeholder='Enter your email'
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor='email'>Password</label>
        <input
          className='h-14 bg-input-bg px-4 rounded-xl placeholder:text-stone-500  focus:outline-stone-800 active:outline-stone-800 outline-none'
          type='email'
          id='email'
          name='email'
          placeholder='Your Password'
        />
      </FormGroup>
      <div className='text-sm text-end mt-6 me-2 text-gray-500'>
        <Link>Forgot Password?</Link>
      </div>
      <button className='w-full bg-primary-green py-4 rounded-xl mt-8 text-black'>
        Sign In
      </button>

      <p className='text-center mt-5 text-gray-500'>
        Do not have an account?{" "}
        <span className='text-white'>
          <Link to={"/register"}>Register</Link>
        </span>
      </p>
    </form>
  );
}

export default Form;
