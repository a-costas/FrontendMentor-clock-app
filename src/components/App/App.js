import React, { useState } from "react";

import Main from "../Main";
import Quote from "../Quote";
import "./App.scss";

import { isDaytime } from "../../utils/helpers";
import Drawer from "../Drawer.js/Drawer";

function App() {
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div
        className={"appContainer " + (isDaytime() ? "daytime" : "nighttime")}
      >
        <div className={"quoteWrapper " + (isExpanded ? "invisible" : "")}>
          <Quote />
        </div>
        <div className={`mainWrapper`}>
          <Main isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        </div>
      </div>
      <Drawer isExpanded={isExpanded} />
    </>
  );
}

export default App;
