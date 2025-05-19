import { createSlice } from "@reduxjs/toolkit";
const intialstate = {
  user: null,
};
export const userSlice = createSlice({
  name: userr,
  initialState:intialstate,
  reducers: {
    userLogin: (state, action) => {
      state.user = action.payload;
    },
    userLogOut: (state, action) => {
      state.user = null;
    },
  },
});
export const { userLogin, userLogOut } = userSlice.actions;
export default userSlice.reducer;
