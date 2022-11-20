import { API_ENDPOINT } from "./index";
/*
 * uses a GET request to query products
 * @author Peter Walton
 * @param  {item}         [string or wild-card for query.
 *                         Note: use %25 to get all products]
 * @return {object|null}  [JSON array of objects or response   *                         see src\components\LeftPanel.js
 */
export const queryProducts = async (q) => {
  if (q.length === 0) q = "%25";
  const response = await fetch(`${API_ENDPOINT}/products/query/${q}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};
