import { createSlice } from "@reduxjs/toolkit";
import LocalStorage from "../../../utils/localStorage";

const initialState = {
  user: LocalStorage.get("auth"),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.error = null;
      const users = LocalStorage.get("users");
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
        LocalStorage.set("auth", foundUser);
      } else {
        state.error = { message: "Incorrect Credentials" };
      }
    },
    registerUser: (state, action) => {
      const users = LocalStorage.get("users") || [];
      const id = "usr" + new Date().toISOString();
      users.push({ ...action.payload, id });
      state.user = { ...action.payload, id };
      LocalStorage.set("users", users);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    resetErrors: (state) => {
      state.error = null;
    },

    logOutUser: (state) => {
      LocalStorage.remove("auth");
      state.user = null;
    },
  },
});

export const { loginUser, logOutUser, setLoading, resetErrors, registerUser } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
