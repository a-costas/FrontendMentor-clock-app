import React, { useState, useEffect } from "react";

import "./Main.scss";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";

import useFetch from "../../hooks/useFetch";
import { ENDPOINTS } from "../../utils/constants";
import { getGreeting, getTime } from "../../utils/helpers";
import { isDaytime } from "../../utils/helpers";
import moonIcon from "../../assets/desktop/icon-moon.svg";
import sunIcon from "../../assets/desktop/icon-sun.svg";

function Main() {
  const [time, setTime] = useState(getTime());
  const { data: locationData, loading, error } = useFetch(ENDPOINTS.location);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (error) return <div>Error loading data</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <main className="mainContainer">
      <div className="greetingBlock">
        {isDaytime() ? (
          <img className="icon" src={sunIcon} alt="sun" />
        ) : (
          <img className="icon" src={moonIcon} alt="moon" />
        )}
        <p>{getGreeting()}</p>
      </div>
      <VisuallyHidden>Time and location</VisuallyHidden>
      <div className="timeBlock">
        <h1 className="time">{time}</h1>
        <h6 className="timezone">
          {locationData.timezone ? locationData.timezone.abbr : ""}
        </h6>
      </div>
      <h6>
        In {locationData.region}, {locationData.country_code}
      </h6>
    </main>
  );
}

export default Main;
