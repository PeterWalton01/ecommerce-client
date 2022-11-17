import { CURRENCY } from "../api";
import React from "react";
/* Function Header
 *
 * code for the OrderDetailCard component
 * @author Peter Walton
 * @param  {item}         [the order item to be displayed]
 */
const OrderDetailCard = ({ item }) => {
  return (
    <div className="order-detail-container">
      <div className="grid-description">
        <i>{item.description}</i>
      </div>
      <div></div>
      <div>
        Unit price: {CURRENCY}
        {(1.0 * item.unit_price).toFixed(2)}
      </div>
      <div>Quantity: {item.quantity}</div>
      <div>
        <b>
          Total: {CURRENCY}
          {(item.unit_price * item.quantity).toFixed(2)}
        </b>
      </div>
    </div>
  );
};

export default OrderDetailCard;
