import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slice/form.slice";
import loginSlice from "./slice/login.slice";

export const store = configureStore({
  reducer: {
    form: formSlice,
    login: loginSlice
  }
})

export default store