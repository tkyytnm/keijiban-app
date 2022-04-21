import { createSlice } from "@reduxjs/toolkit";

const flashMessageSlice = createSlice({
  name: "flashMessage",
  initialState: {
    flashMessage: "",
  },
  reducers: {
    setFlashMessage(state, action) {
      state.flashMessage = action.payload;
    },
  },
});

export default flashMessageSlice.reducer;
export const { setFlashMessage } = flashMessageSlice.actions;
export const selectFlashMessage = (state) => state.flashMessage.flashMessage;
