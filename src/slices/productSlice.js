/* Function Header
 *
 * a slice to hold the current product list.
 * Item on the current order will not be included
 * as they should not be selectable. Product removed
 * from the order will return to this list
 * @author Peter Walton
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
};

const productSlice = createSlice({
  name: "productList",
  initialState: initialState,
  reducers: {
    setProductList: (status, action) => {
      status.productList = action.payload;
    },
    deleteProduct: (status, action) => {
      status.productList = status.productList.filter((itm) => {
        return itm.product_id !== action.payload;
      });
    },
    addProduct: (status, action) => {
      status.productList = [...status.productList, action.payload];
    },
  },
});

export const selectProductList = (state) => state.productList.productList;

export const { setProductList, deleteProduct, addProduct } =
  productSlice.actions;

export default productSlice.reducer;
