import { createSlice } from "@reduxjs/toolkit";

const soloProduct_reducer = createSlice({
  name: "solo-product reducer",
  initialState: {
    product: [],
  },
  reducers: {
    pushSingle_product: (state, action) => {
      state.product = [];
      const product = action.payload;
      state.product.push(product);
    },
  },
});

export default soloProduct_reducer.reducer;
export const { pushSingle_product } = soloProduct_reducer.actions;
