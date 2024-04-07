import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  formData: [
    {
      id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
      productName: "Television",
      productCategory: "electronic",
      productFreshness: "Brand New",
      productPrice: "100",
      productDesc: "This is a sample",
    },
  ],
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormData: (state, action) => {
      state.formData.push(action.payload);
    },
    removeFormData: (state, action) => {
      state.formData = state.formData.filter(item => item.id !== action.payload);
    },
  },
});


export const { addFormData, removeFormData } = formSlice.actions;

export default formSlice.reducer;
