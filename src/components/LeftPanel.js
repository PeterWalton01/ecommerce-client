import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineSearch } from "react-icons/hi";
import { queryProducts } from "../api/products";
import { setMessage } from "../slices/messageSlice";
import { setProductList, selectProductList } from "../slices/productSlice";
import { selectCart } from "../slices/cartSlice";
import ProductCard from "./ProductCard";
import { getDifference } from "../utils/subtractArrOfObject";
/* Function Header
 *
 * code for the dialogue that shows a list of products. if any
 * are selected that move into order dialogue on the right.
 * There is a selection dialogue that allows the product list
 * to be reduced. Any products already in the order will not
 * appear in the list. See the call to getDifference.
 * @author Peter Walton
 * @input/output  messageSlice, productSlice, cartSlice
 */
const LeftPanel = () => {
  const productList = useSelector(selectProductList);
  const cart = useSelector(selectCart);
  const [criteria, setCriteria] = useState("");
  const [clicked, setClicked] = useState(true);
  const dispatch = useDispatch();

  const onCriteriaSubmit = (e) => {
    e.preventDefault();
    setClicked((prev) => !prev);
  };

  const onCriteriaChange = (e) => {
    setCriteria(e.target.value);
  };

  useEffect(() => {
    dispatch(setMessage({ message: "" }));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(setMessage({ message: "" }));
    const getData = async () => {
      const resp = await queryProducts(criteria);
      if (resp.success === undefined) {
        let diff = getDifference(resp, cart.cartDetails, "product_id");
        await dispatch(setProductList(diff));
      } else {
        await dispatch(setProductList([]));
        dispatch(setMessage(resp));
      }
    };
    getData();
    // eslint-disable-next-line
  }, [clicked]);

  return (
    <div className="product-container">
      <div className="search-group">
        <h3 className="sm-t-margin sm-b-margin">Product Search</h3>
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
        <ul>
          {productList.map((itm) => (
            <li key={itm.product_id}>
              <ProductCard product={itm} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftPanel;
