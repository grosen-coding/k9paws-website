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

// Create New Report
export const createReport = createAsyncThunk(
  "reports/create",
  async (reportData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.client.token;
      return await reportService.createReport(reportData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createReport.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createReport.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createReport.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = reportSlice.actions;
export default reportSlice.reducer;
