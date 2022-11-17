import React from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
/* Function Header
 *
 * code for the main component
 * @author Peter Walton
 */
const Main = () => {
  return (
    <div className="main">
      <div className="left-panel">
        <LeftPanel />
      </div>
      <div className="right-panel">
        <RightPanel />
      </div>
    </div>
  );
};

export default Main;
