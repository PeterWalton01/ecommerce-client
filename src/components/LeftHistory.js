import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMessage } from "../slices/messageSlice";
import { selectHistory } from "../slices/historySlice";
import { HiOutlineSearch } from "react-icons/hi";
import OrderHeaderCard from "./OrderHeaderCard";
import { setCurrentId } from "../slices/currentIdSlice";
/* Function Header
 *
 * code for the left-hand part of the history dialogue.
 * This includes a search dialogue, and a list of the users
 * order headers. Clicking one of these will show the
 * order details on the right-side of the dialogue
 * @author Peter Walton
 * @input/output  messageSlice, currentIdSlice
 */
const LeftHistory = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [clicked, setClicked] = useState(true);
  const [criteria, setCriteria] = useState("");

  const history = useSelector(selectHistory);

  // filter by the criteria
  const onCriteriaSubmit = (e) => {
    e.preventDefault();
    const match = history.orderHeaders.filter((item) => {
      // eslint-disable-next-line
      return item.order_id == criteria;
    });
    // if a match is found for the current criteria
    // set the current Id in the currentId slice
    // The corresponding order details will now display
    // on the right
    if (match.length > 0) {
      dispatch(setCurrentId(match[0].order_id));
      dispatch(setMessage({ message: "" }));
    } else {
      dispatch(setMessage({ message: "No match" }));
    }
    setClicked((prev) => !prev);
  };

  const onCriteriaChange = (e) => {
    setCriteria(e.target.value);
  };

  return (
    <div className="search-group">
      <h3 className="sm-t-margin sm-b-margin">History Search</h3>
      <form className="search" onSubmit={onCriteriaSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={criteria}
          onChange={onCriteriaChange}
          aria-label="Search posts"
        />
        <button type="submit" onClick={onCriteriaSubmit} aria-label="Search">
          <HiOutlineSearch />
        </button>
      </form>
      <div className="order-header-container">
        <ul>
          {history.orderHeaders.map((item, i) => {
            return (
              <li key={i}>
                <OrderHeaderCard header={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LeftHistory;
