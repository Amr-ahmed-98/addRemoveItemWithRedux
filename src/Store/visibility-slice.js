import { createSlice } from "@reduxjs/toolkit";

const visibilitySlice = createSlice({
  name: "visibility",
  initialState: { isVisible: false, notification: null },
  reducers: {
    isVisible(state) {
      state.isVisible = !state.isVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const visibilityActions = visibilitySlice.actions;
export default visibilitySlice;
