import React from "react";

import "./Quote.scss";
import refreshIcon from "../../assets/desktop/icon-refresh.svg";

function Quote() {
  return (
    <div className="quoteContainer">
      <div className="top">
        <p className="quote">
          “The science of operations, as derived from mathematics more
          especially, is a science of itself, and has its own abstract truth and
          value.”
        </p>
        <input className="icon" type="image" src={refreshIcon} alt="refresh" />
      </div>
      <h5 className="quoteCitation">Ada Lovelace</h5>
    </div>
  );
}

export default Quote;
