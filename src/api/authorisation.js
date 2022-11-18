import { API_ENDPOINT } from ".";
/*
 * uses a POST request to register a new local
 * use account
 * @author Peter Walton
 * @param  {user}         [user object: see
 *                         src\components\Register.js
 *                         for details]
 *
 * @return {object|null}  [JSON object containing response]
 */
export const addRegistration = async (user) => {
  const response = await fetch(`${API_ENDPOINT}/auth/register`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};
/*
 * uses a GET request to attempt a logon using
 * a Google account
 * @author Peter Walton
 * @return {object|null}  [JSON object containing response]
 */
export const googleLogon = async () => {
  const response = await fetch(`${API_ENDPOINT}/auth/login/federated/google`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};
/*
 * uses a POST request to attempt a local logon
 * @author Peter Walton
 * @param  {data}         [see file
 *                         src\components\Logon.js
 *                         for detail]
 * @return {object|null}  [JSON object containing response]
 */
export const localLogon = async (data) => {
  const response = await fetch(`${API_ENDPOINT}/auth/login`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};
/*
 * uses a DELETE request to attempt a local logoff
 * @author Peter Walton
 * @param  {data}         [see file
 *                         src\components\Nav.js
 *                         for detail]
 * @return {object|null}  [JSON object containing response]
 */
export const localLogoff = async () => {
  const response = await fetch(`${API_ENDPOINT}/auth/logout`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};
