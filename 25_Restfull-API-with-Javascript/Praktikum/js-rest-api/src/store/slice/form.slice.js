import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: [

  ],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    getFormData: (state, action) => {
      state.formData = action.payload;
    },
    addFormData: (state, action) => {
      state.formData.push(action.payload);
    },
    removeFormData: (state, action) => {
      state.formData = state.formData.filter(
        (item) => item.id !== action.payload
      );
    },
    updateFormData: (state, action) => {
      const { id, newData } = action.payload;
      const index = state.formData.findIndex(item => item.id === id);
      if (index !== -1) {
        state.formData[index] = {...state.formData[index], ...newData};
      }
    },
  },
});

export const { getFormData, addFormData, removeFormData, updateFormData } = formSlice.actions;

export default formSlice.reducer;
