import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { localLogon } from "../api/authorisation";
import { setMessage } from "../slices/messageSlice";
import { useDispatch } from "react-redux";
import { setLogon } from "../slices/logonSlice";
import { API_ENDPOINT } from "../api";
import { setBalance } from "../slices/balanceSlice";
/* Function Header
 *
 * code for the local logon component
 * @author Peter Walton
 * @input/output messageSlice, logonSlice, balanceSlice
 */
const Logon = () => {
  const dispatch = useDispatch();

  // logon data
  const initialData = { email: "", password: "" };
  const [data, setData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // attempt local logon
    dispatch(setMessage("Logging on..."));
    const resp = await localLogon(data);
    dispatch(setMessage(resp));
    if (resp.success) {
      setData(initialData);
      // Reset balance for pre-pay payment model
      dispatch(setBalance(3000));
      // set logon status in logon slice
      dispatch(setLogon(true));
    } else {
      dispatch(setLogon(false));
    }
  };

  useEffect(() => {
    dispatch(setMessage({ message: "" }));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="logon-form">
      <h3>Login with your email and password</h3>
      <form onSubmit={handleSubmit}>
        <div className="grid-container">
          <div className="grid-item1">
            <label>Email:</label>
          </div>
          <div className="grid-item2">
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              required
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="grid-item3">
            <label>Password:</label>
          </div>
          <div className="grid-item4">
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              required
              value={data.password}
              onChange={handleChange}
              minLength="8"
              maxLength="14"
            />{" "}
          </div>
        </div>
        <input type="submit" value="Login!" className="login" />
        <Link to="/register" className="register-click">
          Click to register.
        </Link>
      </form>
      <hr style={{ color: "lightgray" }} />
      <div>
        <h3>Login with social network</h3>
        <a href={`${API_ENDPOINT}/auth/login/federated/google`} target="_">
          <button>
            <FcGoogle className="google-icon" />{" "}
            <span className="google">Google</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Logon;
