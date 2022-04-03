import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
  client: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register New Client
export const register = createAsyncThunk(
  "auth/register",
  async (client, thunkAPI) => {
    try {
      return await authService.register(client);
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

// Login User
export const login = createAsyncThunk(
  "auth/login",
  async (client, thunkAPI) => {
    console.log(client);
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
