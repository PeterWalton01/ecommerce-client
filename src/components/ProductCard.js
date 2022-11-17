import { CURRENCY } from "../api";
import React from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../slices/cartSlice";
import { deleteProduct } from "../slices/productSlice";
/* Function Header
 *
 * code for the ProductCard component. A series of these
 * are displayed to allow product selection. If a product
 * is selected, it is removed from the product list and
 * added to the cart.
 * @author Peter Walton
 * @param  {product}         [the product to be displayed]
 * @input/output  cartSlice, productSlice
 */
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  // move selected item to the current cart
  const handleAdd = (e) => {
    dispatch(addCartItem({ ...product, quantity: 1 }));
    dispatch(deleteProduct(product.product_id));
  };

  return (
    <div className="product-item-container">
      <div className="just-left product-detail">
        <span>{product.product_code}</span>
        <div className="fl-right il-block">
          <span>
            {CURRENCY}
            {product.unit_price}
          </span>
        </div>
        <br />
        {product.description}
      </div>
      <div className="add-btn">
        <button className="sm-m-left" onClick={handleAdd}>
          Add Item
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
