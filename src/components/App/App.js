import React, { useState } from "react";

import Main from "../Main/Main";
import Quote from "../Quote";
import "./App.scss";

function App() {
  const [isDaytime, setIsDaytime] = useState(false);

  return (
    <div className={"appContainer " + (isDaytime ? "daytime" : "nighttime")}>
      <Quote />
      <Main setIsDaytime={setIsDaytime} />
    </div>
  );
}

export default App;
