import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.error = null;
      const users = JSON.parse(localStorage.getItem("users"));
      if (!users?.length > 0) {
        state.error = { message: "Incorrect Credentials" };
        return;
      }
      const foundUser = users.find(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );
      if (foundUser) {
        state.user = foundUser;
      } else {
        state.error = { message: "Incorrect Credentials" };
      }
    },
    registerUser: (state, action) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const id = "usr" + new Date().toISOString();
      users.push({ ...action.payload, id });
      state.user = { ...action.payload, id };
      localStorage.setItem("users", JSON.stringify(users));
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    resetErrors: (state) => {
      state.error = null;
    },
  },
});

export const { loginUser, logOutUser, setLoading, resetErrors, registerUser } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
