/* Slice Header
 *
 * contains details for the current cart and session
 * - cartHeader - current cart header
 * - cartDetails - array of items for the current cart
 * @author Peter Walton
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartHeader: {},
  cartDetails: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    setCart: (status, action) => {
      status.cartHeader = action.payload.cartHeader;
      status.cartDetails = action.payload.cartDetails;
    },
    delCartItem: (status, action) => {
      status.cartDetails = status.cartDetails.filter((itm) => {
        return itm.product_id !== action.payload;
      });
    },
    addCartItem: (status, action) => {
      status.cartDetails = [...status.cartDetails, action.payload];
    },
    incCartItem: (status, action) => {
      const item = status.cartDetails.filter((itm) => {
        return itm.product_id === action.payload;
      });
      item[0].quantity += 1;
    },
    decCartItem: (status, action) => {
      const item = status.cartDetails.filter((itm) => {
        return itm.product_id === action.payload;
      });
      item[0].quantity -= 1;
    },
  },
});

export const selectCart = (state) => state.cart;

export const { setCart, addCartItem, incCartItem, decCartItem, delCartItem } =
  cartSlice.actions;

export default cartSlice.reducer;
