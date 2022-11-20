import { API_ENDPOINT } from "./index";
/*
 * uses a POST request to create an order header
 * @author Peter Walton
 * @return {object|null}  [JSON object see
 *                         src\components\PlaceOrder.js]
 */
export const addOrderHeader = async () => {
  const response = await fetch(`${API_ENDPOINT}/orders`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};
/*
 * uses a POST request to create an order item detail
 * @author Peter Walton
 * @param  {item}         [see body definition below]
 * @return {object|null}  [JSON object containing response see
 *                         src\components\PlaceOrder.js]
 */
export const addOrderDetail = async (item) => {
  const response = await fetch(`${API_ENDPOINT}/order/items`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({
      order_id: item.order_id,
      product_id: item.product_id,
      quantity: item.quantity,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = await response.json();

  return jsonResponse;
};
/*
 * uses a GET request obtain all order headers
 *  for the current user
 * @author Peter Walton
 * @return {object|null}  [JSON array of objects.  See
 *                         src\components\History.js]
 */
export const getMyOrderHeaders = async () => {
  const response = await fetch(`${API_ENDPOINT}/orders/mine`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = await response.json();

  return jsonResponse;
};
/*
 * uses a GET request to get order details fo a given
 * order Id
 * @author Peter Walton
 * @param  {order_id}     [id of the order]
 * @return {object|null}  [JSON object containing response see
 *                         src\components\OrderDetail.js]
 */
export const getOrderItemsForOrder = async (order_id) => {
  const response = await fetch(`${API_ENDPOINT}/order/${order_id}/items`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};
