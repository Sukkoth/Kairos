import { Link } from "react-router-dom";
import FormGroup from "../Login/FormGroup";

function Form() {
  function handleLogin(e) {
    e.preventDefault();
  }
  return (
    <form className='text-start' onSubmit={handleLogin}>
      <FormGroup>
        <label htmlFor='username'>Username</label>
        <input
          className='h-14 bg-input-bg px-4 rounded-xl placeholder:text-stone-500  focus:outline-stone-800 active:outline-stone-800 outline-none'
          type='username'
          id='username'
          name='username'
          placeholder='Enter username'
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor='firstName'>First Name</label>
        <input
          className='h-14 bg-input-bg px-4 rounded-xl placeholder:text-stone-500  focus:outline-stone-800 active:outline-stone-800 outline-none'
          type='firstName'
          id='firstName'
          name='firstName'
          placeholder='Enter first name'
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor='lastName'>Last Name</label>
        <input
          className='h-14 bg-input-bg px-4 rounded-xl placeholder:text-stone-500  focus:outline-stone-800 active:outline-stone-800 outline-none'
          type='lastName'
          id='lastName'
          name='lastName'
          placeholder='Enter last name'
        />
      </FormGroup>
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
      <FormGroup>
        <label htmlFor='consfirmPassword'>Confirma Password</label>
        <input
          className='h-14 bg-input-bg px-4 rounded-xl placeholder:text-stone-500  focus:outline-stone-800 active:outline-stone-800 outline-none'
          type='consfirmPassword'
          id='consfirmPassword'
          name='consfirmPassword'
          placeholder='Confirm password'
        />
      </FormGroup>
      <button className='w-full bg-primary-green py-4 rounded-xl mt-12 text-black'>
        Register
      </button>
      <p className='text-center mt-5 text-gray-500'>
        Already have an account?{" "}
        <span className='text-white'>
          <Link to={"/login"}>Login</Link>
        </span>
      </p>
    </form>
  );
}

export default Form;
