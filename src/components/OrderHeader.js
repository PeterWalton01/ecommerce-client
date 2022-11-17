import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentId } from "../slices/currentIdSlice";
import { selectHistory } from "../slices/historySlice";
import { formatDate } from "../utils/formatDate";
/* Function Header
 *
 * code for the OrderHeader component. This is the upper
 * part of the order display in the history page
 * @author Peter Walton
 * @input/output currentIdSlice, historySlice
 */
const OrderHeader = () => {
  const currentId = useSelector(selectCurrentId);
  const history = useSelector(selectHistory);
  const [header, setHeader] = useState({});

  useEffect(() => {
    // initial state. Nothing to show
    if (currentId === 0) return;
    const filtered = history.orderHeaders.filter((item) => {
      return item.order_id === currentId;
    });
    // default to the first order
    setHeader(filtered[0]);
    // eslint-disable-next-line
  }, [currentId]);

  return (
    <div>
      <h3 className="curr-order sm-t-margin sm-b-margin">Current Order</h3>
      <div className="header-report">
        <div>Order No: {header && header.order_id}</div>
        <div>Order Status: {header && header.order_status}</div>
        <div>Date: {formatDate(header && header.creation_date)}</div>
        <div>
          <i></i>
        </div>
      </div>
      <hr style={{ color: "lightgray" }} />
    </div>
  );
};

export default OrderHeader;
