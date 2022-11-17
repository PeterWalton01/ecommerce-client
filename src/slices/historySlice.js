/* Slice Header
 *
 * slice for the history page
 * - orderHeaders - list of orders for the current user
 * - currentOrderDetails - list of items for currently
 *                         selected order
 * @author Peter Walton
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // currentId: 132,
  orderHeaders: [],
  currentOrderDetails: [],
};

const historySlice = createSlice({
  name: "history",
  initialState: initialState,
  reducers: {
    // setCurrentId: (status, action) => {
    //   status.currentId = action.payload;
    // },
    setOrderHeaders: (status, action) => {
      status.orderHeaders = action.payload;
    },
    setCurrentOrderDetails: (status, action) => {
      status.currentOrderDetails = action.payload;
    },
  },
});

export const selectHistory = (state) => state.history;

export const { setCurrentId, setOrderHeaders, setCurrentOrderDetails } =
  historySlice.actions;

export default historySlice.reducer;
