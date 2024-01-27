import PropTypes from "prop-types";
import Calendar from "../Tasks/Calendar";
import FormGroup from "../Login/FormGroup";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AddTaskSchema from "../../utils/AddTaskSchema";
import { addTask } from "../../redux/features/tasks/taskSlice";

function FormContainer() {
  const user = useSelector((state) => state.auth.user);
  const categories = [
    {
      id: 1,
      name: "Brand and Logo Design",
    },
    {
      id: 2,
      name: "Web Development",
    },
    {
      id: 3,
      name: "Digital Marketing",
    },
    {
      id: 4,
      name: "Graphic Design",
    },
    {
      id: 5,
      name: "Photography",
    },
    {
      id: 6,
      name: "Video Production",
    },
    {
      id: 7,
      name: "Content Writing",
    },
    {
      id: 8,
      name: "Mobile App Development",
    },
    {
      id: 9,
      name: "UI/UX Design",
    },
    {
      id: 10,
      name: "E-commerce",
    },
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);

  function addCategory(categoryId) {
    setSelectedCategories((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter((category) => category !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddTaskSchema),
  });

  useEffect(() => {
    setValue("categories", selectedCategories);
  }, [selectedCategories, setValue]);

  const onSubmitHandler = (data) => {
    const taskData = {
      ...data,
      endDate: JSON.stringify(data.endDate),
      startDate: JSON.stringify(data.startDate),
      userId: user.id,
    };
    dispatch(addTask(taskData));
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Calendar />
      <FormGroup>
        <label htmlFor='startDate'>Start Date</label>
        <input
          name='startDate'
          id='startDate'
          type='datetime-local'
          className='h-14 bg-input-bg px-4 rounded-xl placeholder:text-stone-500 focus:outline-stone-800 active:outline-stone-800 outline-none'
          {...register("startDate")}
        />
        {errors.startDate?.message && (
          <p className='text-sm text-red-300 font-normal'>
            {errors.startDate?.message}
          </p>
        )}
      </FormGroup>
      <FormGroup>
        <label htmlFor='endDate'>End Date</label>
        <input
          name='endDate'
          id='endDate'
          type='datetime-local'
          className='h-14 bg-input-bg px-4 rounded-xl placeholder:text-stone-500 focus:outline-stone-800 active:outline-stone-800 outline-none'
          {...register("endDate")}
        />
        {errors.endDate?.message && (
          <p className='text-sm text-red-300 font-normal'>
            {errors.endDate?.message}
          </p>
        )}
      </FormGroup>
      <FormGroup>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          name='title'
          id='title'
          placeholder='Landing Page design'
          className='h-14 bg-input-bg px-4 rounded-xl placeholder:text-stone-500 focus:outline-stone-800 active:outline-stone-800 outline-none'
          {...register("title")}
        />
        {errors.title?.message && (
          <p className='text-sm text-red-300 font-normal'>
            {errors.title?.message}
          </p>
        )}
      </FormGroup>
      <FormGroup>
        <label htmlFor='description'>Description</label>
        <textarea
          className='h-14 bg-input-bg p-4 rounded-xl placeholder:text-stone-500  focus:outline-stone-800 active:outline-stone-800 outline-none'
          name='description'
          id='description'
          placeholder='Description here. . .'
          {...register("description")}
        ></textarea>
        {errors.description?.message && (
          <p className='text-sm text-red-300 font-normal'>
            {errors.description?.message}
          </p>
        )}
      </FormGroup>

      <FormGroup>
        <label htmlFor='category'>Category</label>
        <div className='flex flex-wrap gap-1'>
          {categories.map((category) => (
            <CategoryItem
              key={category.id}
              {...category}
              selected={selectedCategories.includes(category.id)}
              handleCategory={addCategory}
            />
          ))}
        </div>
        {errors.categories?.message && (
          <p className='text-sm text-red-300 font-normal'>
            {errors.categories?.message}
          </p>
        )}
      </FormGroup>
      <button
        className={`w-full ${"bg-primary-green"} py-4 rounded-xl mt-12 text-black`}
      >
        Add Task
      </button>
    </form>
  );
}

function CategoryItem({ name, selected, handleCategory, id }) {
  return (
    <div
      onClick={() => handleCategory(id)}
      className={`p-2 cursor-pointer py-4 rounded-xl  focus:outline-stone-800 active:outline-stone-800 outline-none ${
        selected ? "bg-primary-green text-black" : "bg-input-bg text-stone-500"
      }`}
    >
      {name}
    </div>
  );
}

CategoryItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  handleCategory: PropTypes.func,
};

export default FormContainer;
