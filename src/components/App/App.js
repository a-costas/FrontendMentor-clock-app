import React, { useState } from "react";

import Main from "../Main/Main";
import Quote from "../Quote";
import "./App.scss";

import { isDaytime } from "../../utils/helpers";
import Drawer from "../Drawer.js/Drawer";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div
        className={"appContainer " + (isDaytime() ? "daytime" : "nighttime")}
      >
        {isExpanded ? "" : <Quote />}
        <div className={`mainWrapper`}>
          <Main isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        </div>
      </div>
      <Drawer isExpanded={isExpanded} />
    </>
  );
}

export default App;
