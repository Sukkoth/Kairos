import { Link, useNavigate } from "react-router-dom";
import FormGroup from "./FormGroup";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, setLoading } from "../../redux/features/Auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginSchema from "../../utils/yupSchemas/LoginSchema";

function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });
  const { user, loading } = useSelector((state) => state.auth);

  const onSubmitHandler = (data) => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(loginUser(data));
      dispatch(setLoading(false));
      reset();
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
        <label htmlFor='email'>E-mail</label>
        <input
          className='h-14 bg-input-bg px-4 rounded-xl placeholder:text-stone-500  focus:outline-stone-800 active:outline-stone-800 outline-none'
          type='email'
          id='email'
          name='email'
          placeholder='Enter your email'
          {...register("email")}
        />
        <p className='text-sm text-red-500 font-normal'>
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
        <p className='text-sm text-red-500 font-normal'>
          {errors.password?.message}
        </p>
      </FormGroup>
      {/* <div className='text-sm text-end mt-6 me-2 text-gray-500'>
        <Link>Forgot Password?</Link>
      </div> */}
      <button
        className={`w-full ${"bg-primary-green"} py-4 rounded-xl mt-12 text-black`}
      >
        {loading ? "Loading . . ." : "Sign In"}
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
