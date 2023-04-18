import React, { useState } from "react";

import Main from "../Main/Main";
import Quote from "../Quote";
import "./App.scss";

import { isDaytime } from "../../utils/helpers";

function App() {
  // const [isDaytime, setIsDaytime] = useState(false);

  return (
    <div className={"appContainer " + (isDaytime() ? "daytime" : "nighttime")}>
      <Quote />
      <Main />
    </div>
  );
}

export default App;
