import { createSlice } from "@reduxjs/toolkit";

const technologiesSlice = createSlice({
  name: "technologies",
  initialState: [],
  reducers: {
    setTechnologies: (state, action) => action.payload
  },
});

export const { setTechnologies } = technologiesSlice.actions;
export default technologiesSlice.reducer;