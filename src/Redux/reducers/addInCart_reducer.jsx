import { createSlice } from "@reduxjs/toolkit";

const addInCart_reducer = createSlice({
  name: "fetchApi reducer",
  initialState: {
    cart: [],
    totalItem: 0,
  },
  reducers: {
    addInCart: (state, action) => {
      const product = action.payload;

      const itemAlready = state.cart.findIndex(
        (elem) => elem.id === product.id
      );

      // -1 if true
      if (itemAlready !== -1) {
        state.cart[itemAlready].quantity += 1;
      } else {
        state.cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
          description1: product.description1,
          description2: product.description2,
        });
      }
    },

    calculateItems: (state) => {
      const summ = state.cart.reduce((initial, elem) => {
        return elem.quantity + initial;
      }, 0);
      state.totalItem = summ;
    },

    hitQuantityUp: (state, action) => {
      const product = action.payload;
      const targetItem = state.cart.find((elem) => elem.id === product.id);

      if (targetItem) {
        targetItem.quantity += 1;
      }
    },

    hitQuantityDown: (state, action) => {
      const product = action.payload;
      const targetItem = state.cart.find((elem) => elem.id === product.id);

      if (targetItem) {
        targetItem.quantity -= 1;
      }
    },

    removeInCart: (state, action) => {
      const product = action.payload;
      const targetItem = state.cart.find((elem) => elem.id === product.id);

      if (targetItem) {
        state.cart = state.cart.filter((elem) => elem.id !== product.id);
      }
    },
  },
});

export default addInCart_reducer.reducer;
export const {
  addInCart,
  calculateItems,
  hitQuantityUp,
  hitQuantityDown,
  removeInCart,
} = addInCart_reducer.actions;
