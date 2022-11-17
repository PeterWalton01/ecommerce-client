import { CURRENCY } from "../api";
import React, { useEffect } from "react";
import { incCartItem, decCartItem, delCartItem } from "../slices/cartSlice";
import { addProduct } from "../slices/productSlice";
import { useDispatch } from "react-redux";

/* Function Header
 *
 * code for the CartCard component
 * @author Peter Walton
 * @param  {item}         [item to be displayed]
 * @input/output cartSlice
 */
const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  // increment quantity for given product
  const handleInc = () => {
    dispatch(incCartItem(item.product_id));
  };

  // decrement quantity for given product
  const handleDec = () => {
    dispatch(decCartItem(item.product_id));
  };

  // when qty is zero, move the product from the
  // cart to the product selection area
  useEffect(() => {
    if (item.quantity === 0) {
      dispatch(addProduct(item));
      dispatch(delCartItem(item.product_id));
    }
    // eslint-disable-next-line
  }, [item.quantity]);

  // show details for the cart item
  // Allow increment/decrement of quantity
  return (
    <div className="cart-item-container">
      <div className="item-container">
        <div>{item.product_code}</div>
        <div></div>
        <div className="unit-cell">
          Per item: {CURRENCY}
          {item.unit_price}
        </div>
        <div>
          <i>{item.description}</i>
        </div>
        <div></div>
        <div>Quantity: {item.quantity}</div>
        <div></div>
        <div></div>
        <div className="unit-total">
          <b>Total: </b>
          {CURRENCY}
          {(item.unit_price * item.quantity).toFixed(2)}
        </div>
      </div>
      <div className="btn-container">
        <div>
          <button className="prod-btn" onClick={handleInc}>
            +
          </button>
        </div>
        <div>
          <button className="prod-btn" onClick={handleDec}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
