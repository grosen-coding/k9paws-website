import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import reportService from "./reportService";

const initialState = {
  reports: [],
  report: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {},
});

export const { reset } = reportSlice.actions;
export default reportSlice.reducer;
