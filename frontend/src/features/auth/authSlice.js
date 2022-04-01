import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
    console.log(client);
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
