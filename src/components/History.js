import React from "react";
import LeftHistory from "./LeftHistory";
import RightHistory from "./RightHistory";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMyOrderHeaders } from "../api/orders";
import { selectCurrentId, setCurrentId } from "../slices/currentIdSlice";
import { setOrderHeaders } from "../slices/historySlice";
import { selectLogon } from "../slices/logonSlice";
/* Function Header
 *
 * code for the history list of the
 * current users orders
 * @author Peter Walton
 * @param  {item}         [see body definition below]
 * @input/output  currentIdSlice, historySlice, logonSlice
 */
const Main = () => {
  const currentId = useSelector(selectCurrentId);
  const loggedOn = useSelector(selectLogon);
  const dispatch = useDispatch();
  useEffect(() => {
    // nothing to show if no one is logged in
    if (!loggedOn) {
      return;
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // nothing to show if no one is logged in
    if (!loggedOn) return;
    // define a function to get the history headers
    const getData = async () => {
      const resp = await getMyOrderHeaders();
      if (resp.success === undefined) {
        if (currentId === 0) dispatch(setCurrentId(resp[0].order_id));
        dispatch(setOrderHeaders(resp));
      } else {
        console.log(resp);
      }
    };
    // run the function defined
    getData();
    // eslint-disable-next-line
  }, [currentId]);

  return (
    <div className="main">
      <div className="left-panel">
        <LeftHistory />
      </div>
      <div className="right-panel">
        <RightHistory />
      </div>
    </div>
  );
};

export default Main;
