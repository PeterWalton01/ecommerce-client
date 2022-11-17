/* Slice Header
 *
 * this slice holds the pre-pay balance for the current
 * logon session. The balance can be reset to £3000 and
 * the balance can be reduced as needed.
 * @author Peter Walton
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 3000,
};

const balanceSlice = createSlice({
  name: "balance",
  initialState: initialState,
  reducers: {
    setBalance: (status, action) => {
      status.balance = action.payload;
    },
    reduceBalance: (status, action) => {
      status.balance -= action.payload;
    },
  },
});

export const selectBalance = (state) => state.balance.balance;

export const { reduceBalance, setBalance } = balanceSlice.actions;

export default balanceSlice.reducer;
