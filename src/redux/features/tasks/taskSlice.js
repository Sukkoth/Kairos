import { createSlice } from "@reduxjs/toolkit";
import LocalStorage from "../../../utils/localStorage";

const initialState = {
  tasks: LocalStorage.get("tasks") || [],
  task: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const task = {
        ...action.payload,
        type: "ongoing",
        id: new Date().toISOString(),
      };
      state.tasks.push(task);

      LocalStorage.set("tasks", state.tasks);

      state.task = task;
    },
    updateTask: (state, action) => {
      const tasks = state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, ...action.payload.data }
          : task
      );
      LocalStorage.set("tasks", tasks);

      state.tasks = tasks;
    },
    deleteTask: (state, action) => {
      const tasks = state.tasks.filter((task) => task.id !== action.payload);
      state.tasks = tasks;
      LocalStorage.set("tasks", tasks);
    },
  },
});

export const taskByIdSelector = (id) => (state) => {
  return state.tasks.tasks.filter((task) => task.id === id);
};

export const selectByType = (type) => (state) => {
  return state.tasks.tasks.filter((task) => task.type === type);
};
export const { addTask, updateTask, deleteTask } = taskSlice.actions;

export const tasksReducer = taskSlice.reducer;
