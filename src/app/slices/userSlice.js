import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authUser: null,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthUser, setIsAuthenticated } = userSlice.actions;

export default userSlice.reducer;
