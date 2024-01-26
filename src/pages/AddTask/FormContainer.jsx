import PropTypes from "prop-types";
import Calendar from "../Tasks/Calendar";
import FormGroup from "../Login/FormGroup";
import { useState } from "react";

function FormContainer() {
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

  return (
    <form>
      <Calendar />
      <FormGroup>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          placeholder='Landing Page design'
          className='h-14 bg-input-bg px-4 rounded-xl placeholder:text-stone-500 focus:outline-stone-800 active:outline-stone-800 outline-none'
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor='description'>Description</label>
        <textarea
          className='h-14 bg-input-bg p-4 rounded-xl placeholder:text-stone-500  focus:outline-stone-800 active:outline-stone-800 outline-none'
          name='description'
          id='description'
          placeholder='Description here. . .'
        ></textarea>
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
      </FormGroup>
    </form>
  );
}

function CategoryItem({ name, selected, handleCategory, id }) {
  //   console.log("name: ", id, selected);
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
