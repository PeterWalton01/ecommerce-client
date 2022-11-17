import React from "react";
import OrderHeader from "./OrderHeader";
import OrderDetail from "./OrderDetail";
/* Function Header
 *
 * code for the RightHistory side of the history page.
 * This show the header and detail of the currently
 * selected order.
 * @author Peter Walton
 */
const RightHistory = () => {
  return (
    <div className="right-history-container>">
      <div className="right-history">
        <div className="order-header">
          <OrderHeader />
        </div>
        <div className="order-detail">
          <OrderDetail />
        </div>
      </div>
    </div>
  );
};

export default RightHistory;
