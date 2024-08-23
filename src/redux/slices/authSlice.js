/** @format */

// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../utils/api";

// Define your initial state
const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

// Create async actions for sign-in and sign-up
export const signIn = createAsyncThunk(
  "auth/signIn",
  async (userCredentials, { rejectWithValue }) => {
    try {
      const response = await API.post("/api/auth/signin", userCredentials);
      localStorage.setItem("token", response.data?.token);
      return response.data; // Expecting { user, token }
    } catch (error) {
      return rejectWithValue(error.response?.data || "Someting went wrong");
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (userDetails, { rejectWithValue }) => {
    try {
      const response = await API.post("/api/auth/signup", userDetails);
      return response.data; // Expecting { user, token }
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong"); // Handle if response is not defined
    }
  }
);

// Create the slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut(state) {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload?.user;
        state.token = action.payload?.token;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        if (action.payload && action.payload.message) {
          state.error = action.payload.message;
          return;
        }
        const errors = action.payload.errors;
        state.error = errors?.reduce((acc, errorObj) => {
          console.log(errorObj.path);
          acc[errorObj.path] = errorObj["msg"];
          return acc;
        }, {});
      })
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload?.user;
        state.token = action.payload?.token;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        const errors = action.payload.errors;
        state.error = errors?.reduce((acc, errorObj) => {
          console.log(errorObj.path);
          acc[errorObj.path] = errorObj["msg"];
          return acc;
        }, {});
      });
  },
});

// Export the reducer
export const { logOut } = authSlice.actions;
export default authSlice.reducer;
