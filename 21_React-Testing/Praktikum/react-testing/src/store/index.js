import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slice/form.slice";

export const store = configureStore({
  reducer: {
    form: formSlice
  }
})

export default store