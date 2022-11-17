import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { localLogoff } from "../api/authorisation";
import { setMessage } from "../slices/messageSlice";
import { setLogon } from "../slices/logonSlice";
import {
  setOrderHeaders,
  setCurrentOrderDetails,
} from "../slices/historySlice";
/* Function Header
 *
 * code for the navigation bar component
 * @author Peter Walton
 * @input/output messageSlice, logonSlice
 */
const Nav = () => {
  const dispatch = useDispatch();

  // manage logoff. Covers both local and Google logoff
  const handleClick = async (e) => {
    const resp = await localLogoff();
    if (resp.success) {
      dispatch(setLogon(false));
    }
    // clear some slices
    dispatch(setOrderHeaders([]));
    dispatch(setCurrentOrderDetails([]));
    dispatch(setMessage(resp));
  };

  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/login">
            <button className="nav-btn logon-btn">Login</button>
          </Link>
        </li>

        <li>
          <Link to="/order">
            <button className="nav-btn order-btn">Order</button>
          </Link>
        </li>
        <li>
          <Link to="/history">
            <button className="nav-btn view-btn">History</button>
          </Link>
        </li>
        <li>
          <button className="nav-btn logoff-btn" onClick={handleClick}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
