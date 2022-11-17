import { CURRENCY } from "../api";
import { useSelector } from "react-redux";
import { selectCart } from "../slices/cartSlice";
import CartCard from "./CartCard";
import CartHeader from "./CartHeader";
import { useHistory } from "react-router-dom";
/* Function Header
 *
 * code for the component RightPanel. This contains the
 * build up of the current order. The order header, detail
 * items and order total are shown. There is also a button
 * to place the order.
 * @author Peter Walton
 * @param  {item}         [see body definition below]
 * @return {object|null}  [JSON object containing] response see
 */
const RightPanel = () => {
  const history = useHistory();
  const cart = useSelector(selectCart);

  const handlePlaceOrder = async (e) => {
    history.push("/place-order");
  };

  return (
    <div className="cart-group">
      <h3 className="sm-t-margin lg-m-left">Cart Details</h3>
      <CartHeader />
      <ul>
        {cart.cartDetails.map((item, i) => (
          <CartCard key={i} item={item} />
        ))}
      </ul>

      <div className="sm-t-margin lg-m-left totals">
        <div>
          {cart.cartDetails.length > 0 && <b>Order total: </b>}
          {cart.cartDetails.length > 0 && CURRENCY}
          {cart.cartDetails.length > 0 &&
            cart.cartDetails
              .map((itm) => {
                return itm.quantity * itm.unit_price;
              })
              .reduce((curr, prev) => curr + prev, 0.0)
              .toFixed(2)}
        </div>
        <div>
          {cart.cartDetails.length > 0 && (
            <input
              type="submit"
              value="Place order"
              className="order"
              onClick={handlePlaceOrder}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
