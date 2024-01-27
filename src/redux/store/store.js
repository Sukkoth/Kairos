import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/Auth";
import { tasksReducer } from "../features/tasks/taskSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer,
  },
});

export default store;
