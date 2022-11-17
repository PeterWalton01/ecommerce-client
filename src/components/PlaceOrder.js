import React, { useEffect, useState } from "react";
import { selectLogon } from "../slices/logonSlice";
import { addOrderHeader, addOrderDetail } from "../api/orders";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setMessage } from "../slices/messageSlice";
import { setCart, selectCart } from "../slices/cartSlice";
import { selectBalance, reduceBalance } from "../slices/balanceSlice";
import { CURRENCY } from "../api";
/* Function Header
 *
 * code for the PlaceOrder component. This
 * component compares the order value with current pre-pay
 * level and seeks approval. If there are insufficient
 * pre-payed funds, the order cannot be approved.
 * If there are sufficient funds then the order can be
 * approved or cancelled.
 * @author Peter Walton
 * @input/output messageSlice, cartSlice, balanceSlice
 */
const PlaceOrder = () => {
  const loggedOn = useSelector(selectLogon);
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const accountBalance = useSelector(selectBalance);

  const [orderValue, setOrderValue] = useState(0.0);

  const handleOrder = async (e) => {
    try {
      // If there is no one logged in, the approval
      // is not appropriate.
      if (!loggedOn) return;
      // If there are insufficient funds, return to
      // the order for possible adjustment.
      if (orderValue > accountBalance) {
        history.push("/order");
        return;
      }
      // First secure funds.
      dispatch(reduceBalance(orderValue));
      // Now place order.
      let resp = await addOrderHeader();
      if (!resp.success === undefined) {
        dispatch(setMessage(resp.message));
        return;
      }
      cart.cartDetails.forEach(async (item) => {
        let detail = {
          order_id: resp.order_id,
          product_id: item.product_id,
          quantity: item.quantity,
        };
        let resp_d = await addOrderDetail(detail);
        if (!resp_d.success === undefined) {
          dispatch(setMessage(resp_d.message));
          return;
        }
      });
    } catch {
      dispatch(setMessage({ message: "Error placing order." }));
    }
    // Reset the cart.
    dispatch(
      setCart({
        cartHeader: {},
        cartDetails: [],
      })
    );
    dispatch(setMessage({ message: "Order placed." }));
    // Go to history to view order.
    history.push("/history");
  };

  const handleCancel = (e) => {
    history.push("/order");
  };

  useEffect(() => {
    setOrderValue(
      cart.cartDetails
        .map((itm) => {
          return itm.quantity * itm.unit_price;
        })
        .reduce((curr, prev) => curr + prev, 0.0)
        .toFixed(2)
    );
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <p className="payment-title">Ecme Prepay Services - Payment Summary</p>
      <p className="center">
        {accountBalance > orderValue && <span>You have sufficent funds</span>}
        {accountBalance < orderValue && <span>You have insufficent funds</span>}
      </p>
      <div className="payment-container">
        <div className="payment-details">
          <div>Account Balance</div>
          <div className="r-align">
            {CURRENCY}
            {accountBalance.toFixed(2)}
          </div>
          <div>Order Balance</div>
          <div className="r-align">
            {CURRENCY}
            {orderValue}
          </div>
        </div>
      </div>
      <div className="order-btn-container">
        <div className="r-align">
          <button className="order" onClick={handleOrder}>
            Confirm
          </button>
        </div>
        <div>
          <button className="order" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
