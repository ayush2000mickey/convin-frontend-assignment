import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  userList: {},
  totalUsers: 0,
  singleUser: null,
  isLoading: false,
};

export const getUsersList = createAsyncThunk(
  "users/getUsersList",
  async (name, thunkAPI) => {
    try {
      const res = await axios("https://reqres.in/api/users?page=2");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getSingleUser = createAsyncThunk(
  "users/getSingleUser",
  async (id, thunkAPI) => {
    try {
      const res = await axios(`https://reqres.in/api/users/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const usersSlice = createSlice({
  name: "Users",
  initialState,
  extraReducers: {
    [getUsersList.pending]: (state) => {
      state.isLoading = true;
    },
    [getUsersList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userList = action.payload;
      state.totalUsers = action.payload.total;
    },
    [getUsersList.rejected]: (state) => {
      state.isLoading = false;
    },
    [getSingleUser.pending]: (state) => {
      state.isLoading = true;
    },
    [getSingleUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.singleUser = action.payload;
    },
    [getSingleUser.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default usersSlice.reducer;
