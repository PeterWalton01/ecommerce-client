import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectHistory, setCurrentOrderDetails } from "../slices/historySlice";
import { getOrderItemsForOrder } from "../api/orders";
import OrderDetailCard from "./OrderDetailCard";
import { selectCurrentId } from "../slices/currentIdSlice";
/* Function Header
 *
 * code for the order detail component. This is the lower
 * part of the display of orders. It shows the order items.
 * @author Peter Walton
 * @input/output currentIdSlice
 */
const OrderDetail = () => {
  const history = useSelector(selectHistory);
  const dispatch = useDispatch();
  const currentId = useSelector(selectCurrentId);
  const currentItems = history.currentOrderDetails;
  const currentHeaders = history.orderHeaders;

  useEffect(() => {
    // if in an initial state, or if no headers are selected
    // there is nothing to show
    if (currentId === 0 || currentHeaders.length === 0) return;
    // define function to get item details and call it.
    // Then set the order details in the slice
    const getData = async (currentId) => {
      const resp = await getOrderItemsForOrder(currentId);
      dispatch(setCurrentOrderDetails(resp));
    };
    getData(currentId);
    // eslint-disable-next-line
  }, [currentId]);

  return (
    <div className="order-detail">
      <ul>
        {currentItems.length > 0 &&
          currentItems.map((item, i) => (
            <li key={i}>
              <OrderDetailCard item={item} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default OrderDetail;
