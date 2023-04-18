import React, { useState, useEffect } from "react";

import "./Quote.scss";
import refreshIcon from "../../assets/desktop/icon-refresh.svg";
import { ENDPOINTS } from "../../utils/constants";

function Quote() {
  const [quoteData, setQuoteData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchURL = async () => {
      await fetch(ENDPOINTS.quotes)
        .then((response) => response.json())
        .then((response) => {
          setQuoteData(response);
        })
        .catch((err) => {
          setError(true);
        })
        .finally(() => setLoading(false));
    };
    fetchURL();
  }, []);

  const handleClick = async () => {
    await fetch(ENDPOINTS.quotes)
      .then((response) => response.json())
      .then((response) => {
        setQuoteData(response);
      });
  };

  if (error) return <div>Error loading data</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div className="quoteContainer">
      <div className="top">
        <p className="quote">{quoteData.content}</p>
        <input
          className="icon"
          type="image"
          src={refreshIcon}
          alt="refresh"
          onClick={handleClick}
        />
      </div>
      <h5 className="quoteCitation">{quoteData.author}</h5>
    </div>
  );
}

export default Quote;
