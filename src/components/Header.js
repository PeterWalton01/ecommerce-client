import React from "react";
import logo from "../img/Smile.png";
import basket from "../img/Basket.png";
/* Function Header
 *
 * code for the application header
 * @author Peter Walton
 */
const Header = () => {
  return (
    <article className="header">
      <div>
        <span className="comp-name1">Am</span>
        <span className="comp-name2">Besten</span>
        <img src={logo} className="smile" alt="smile"></img>
      </div>
      <div>
        <span className="counter"></span>
        <img src={basket} className="basket" alt="basket" />
      </div>
    </article>
  );
};

export default Header;
