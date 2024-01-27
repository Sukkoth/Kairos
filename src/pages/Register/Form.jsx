import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, setLoading } from "../../redux/features/Auth";
import RegistrationSchema from "../../utils/yupSchemas/RegistrationSchema";
import FormGroup from "../Login/FormGroup";

function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, loading: registrationLoading } = useSelector(
    (state) => state.auth
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegistrationSchema),
  });

  const onSubmitHandler = (data) => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(registerUser(data));
      dispatch(setLoading(false));
    }, 2000);
  };

  useEffect(() => {
    if (user?.email) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <form className='text-start' onSubmit={handleSubmit(onSubmitHandler)}>
      <FormGroup>
        <label htmlFor='username'>Username</label>
        <input
          className='h-14 bg-input-bg px-4 rounded-xl placeholder:text-stone-500  focus:outline-stone-800 active:outline-stone-800 outline-none'
          type='text'
          id='username'
          name='username'
          placeholder='Enter username'
          {...register("username")}
        />
        <p className='text-sm text-red-300 font-normal'>
          {errors.username?.message}
        </p>
      </FormGroup>
      <FormGroup>
        <label htmlFor='firstName'>First Name</label>
        <input
          className='h-14 bg-input-bg px-4 rounded-xl placeholder:text-stone-500  focus:outline-stone-800 active:outline-stone-800 outline-none'
          type='text'
          id='firstName'
          name='firstName'
          placeholder='Enter first name'
          {...register("firstName")}
        />
        <p className='text-sm text-red-300 font-normal'>
          {errors.firstName?.message}
        </p>
      </FormGroup>
      <FormGroup>
        <label htmlFor='lastName'>Last Name</label>
        <input
          className='h-14 bg-input-bg px-4 rounded-xl placeholder:text-stone-500  focus:outline-stone-800 active:outline-stone-800 outline-none'
          type='text'
          id='lastName'
          name='lastName'
          placeholder='Enter last name'
          {...register("lastName")}
        />
        <p className='text-sm text-red-300 font-normal'>
          {errors.lastName?.message}
        </p>
      </FormGroup>
      <FormGroup>
        <label htmlFor='email'>E-mail</label>
        <input
          className='h-14 bg-input-bg px-4 rounded-xl placeholder:text-stone-500  focus:outline-stone-800 active:outline-stone-800 outline-none'
          type='email'
          id='email'
          name='email'
          placeholder='Enter your email'
          {...register("email")}
        />
        <p className='text-sm text-red-300 font-normal'>
          {errors.email?.message}
        </p>
      </FormGroup>
      <FormGroup>
        <label htmlFor='password'>Password</label>
        <input
          className='h-14 bg-input-bg px-4 rounded-xl placeholder:text-stone-500  focus:outline-stone-800 active:outline-stone-800 outline-none'
          type='password'
          id='password'
          name='password'
          placeholder='Your Password'
          {...register("password")}
        />
        <p className='text-sm text-red-300 font-normal'>
          {errors.password?.message}
        </p>
      </FormGroup>
      <FormGroup>
        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input
          className='h-14 bg-input-bg px-4 rounded-xl placeholder:text-stone-500  focus:outline-stone-800 active:outline-stone-800 outline-none'
          type='password'
          id='confirmPassword'
          name='confirmPassword'
          placeholder='Confirm password'
          {...register("confirmPassword")}
        />
        <p className='text-sm text-red-300 font-normal'>
          {errors.confirmPassword?.message}
        </p>
      </FormGroup>
      <button
        type='submit'
        className='w-full bg-primary-green py-4 rounded-xl mt-12 text-black'
      >
        {registrationLoading ? "Loading . . ." : "Register"}
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
