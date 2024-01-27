import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        ...action.payload,
        type: "ongoing",
        id: new Date().toISOString(),
      });

      console.log("adding");

      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const { addTask } = taskSlice.actions;

export const tasksReducer = taskSlice.reducer;
