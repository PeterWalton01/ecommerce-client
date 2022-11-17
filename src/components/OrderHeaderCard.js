import React from "react";
import { formatDate } from "../utils/formatDate";
import { setCurrentId } from "../slices/currentIdSlice";
import { useDispatch } from "react-redux";
/* Function Header
 *
 * code for the OrderHeaderCard
 * @author Peter Walton
 * @param  {header}         [this is the order header to be
 *                           displayed]
 * @input/output  currentIdSlice
 */
const OrderHeaderCard = ({ header }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentId(header.order_id));
  };

  return (
    <div className="header-card" onClick={handleClick}>
      <div>Order No: {header.order_id}</div>
      <div>Date: {formatDate(header.creation_date)}</div>
      <div>Order Status: {header.order_status}</div>
      <div>
        <i>Click to view</i>
      </div>
    </div>
  );
};

export default OrderHeaderCard;
