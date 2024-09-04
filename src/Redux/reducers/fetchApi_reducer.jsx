// export default fetchApi_Reducer.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching data
export const fetch_asyncThunk = createAsyncThunk(
  "api/get",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://66d8750137b1cadd8054bb08.mockapi.io/sample"
      );
      const data = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Async thunk for posting data
export const post_asyncThunk = createAsyncThunk(
  "api/post",
  async (body, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://66d8750137b1cadd8054bb08.mockapi.io/sample",
        body
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Async thunk for deleting data
export const del_asyncThunk = createAsyncThunk(
  "api/delete",
  async (productId, { rejectWithValue }) => {
    try {
      await axios.delete(
        `https://66d8750137b1cadd8054bb08.mockapi.io/sample/${productId}`
      );
      return productId;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Slice definition
const fetchApiSlice = createSlice({
  name: "fetchApi",
  initialState: {
    ApiProducts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch request
      .addCase(fetch_asyncThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetch_asyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.ApiProducts = action.payload;
      })
      .addCase(fetch_asyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Post request
      .addCase(post_asyncThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(post_asyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.ApiProducts.push(action.payload);
      })
      .addCase(post_asyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete request
      .addCase(del_asyncThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(del_asyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.ApiProducts = state.ApiProducts.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(del_asyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default fetchApiSlice.reducer;
