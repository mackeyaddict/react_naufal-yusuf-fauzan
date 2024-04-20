import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
  isLogin: false
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getUserData: (state, action) => {
      state.formData = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { getUserData, setIsLogin } = loginSlice.actions;

export default loginSlice.reducer;
