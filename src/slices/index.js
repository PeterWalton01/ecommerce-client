/* Function Header
 *
 * code to configure the store
 * @author Peter Walton
 */
import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./messageSlice";
import cartReducer from "./cartSlice";
import productListReducer from "./productSlice";
import historyReducer from "./historySlice";
import currentIdReducer from "./currentIdSlice";
import loggedOnSliceReducers from "./logonSlice";
import balanceReducer from "./balanceSlice";

const store = configureStore({
  reducer: {
    message: messageReducer,
    cart: cartReducer,
    productList: productListReducer,
    history: historyReducer,
    currentId: currentIdReducer,
    loggedOn: loggedOnSliceReducers,
    balance: balanceReducer,
  },
});

export default store;
