import { createSlice } from "@reduxjs/toolkit";
import { initialData as initialState } from "./initialState";

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    saveDataInStore: (state, action) => {
      state.blogData = action.payload ? action.payload?.data : state.blogData;
    },
  },
});

export const { saveDataInStore } = blogSlice.actions;

export default blogSlice.reducer;
