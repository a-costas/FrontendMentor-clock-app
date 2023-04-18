import React, { useState, useEffect } from "react";

import moment from "moment";

import "./Main.scss";

import moonIcon from "../../assets/desktop/icon-moon.svg";
import sunIcon from "../../assets/desktop/icon-sun.svg";

const personalIpURL = "https://api.ipify.org/?format=json";
const getLocationURL = "https://timezoneapi.io/api/ip/?";
const locationTokenQuery = "&token=aNCgyJBmuzCzwrgsVmzm";

function Main({ setIsDaytime }) {
  const [ip, setIp] = useState("");
  const [location, setLocation] = useState({});
  const [currentHour, setCurrentHour] = useState(0);

  const [time, setTime] = useState(
    new Date()
      .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      .replace(" AM", "")
      .replace(" PM", "")
  );

  // This could be a hook
  function refreshClock() {
    setTime(
      new Date()
        .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        .replace(" AM", "")
        .replace(" PM", "")
    );
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    const fetchIp = async () => {
      await fetch(personalIpURL)
        .then((response) => response.json())
        .then((data) => {
          setIp(data.ip);
        });
    };
    fetchIp();
  }, []);

  useEffect(() => {
    const fetchLocation = async () => {
      await fetch(getLocationURL + ip + locationTokenQuery)
        .then((response) => response.json())
        .then((data) => {
          setLocation({
            state: data.data.state,
            country: data.data.country_code,
            timezone: data.data.datetime.offset_tzab,
            date: data.data.datetime.date,
            day: data.data.datetime.day_full,
            weekNo: data.data.datetime.week,
          });
          setTime(convert(data.data.datetime.time));
          setCurrentHour(data.data.datetime.hour_24_wolz);
        });
    };
    fetchLocation();
  }, [ip]);

  function renderGreeting() {
    const current = Number(currentHour);
    if (current >= 5 && current < 12) {
      setIsDaytime(true);
      return "Good Morning!";
    } else if (current >= 12 && current < 18) {
      setIsDaytime(true);
      return "Good Afternoon!";
    } else if (current >= 18 && current < 23) {
      setIsDaytime(false);
      return "Good evening!";
    } else {
      setIsDaytime(false);
      return "Good night!";
    }
  }

  function convert(input) {
    return moment(input, "HH:mm:ss").format("h:mm");
  }

  return (
    <main className="mainContainer">
      <div className="greetingBlock">
        {currentHour >= 5 && currentHour < 18 ? (
          <img className="icon" src={sunIcon} alt="sun" />
        ) : (
          <img className="icon" src={moonIcon} alt="moon" />
        )}
        <p>{renderGreeting()}</p>
      </div>
      <div className="timeBlock">
        <h1 className="time">{time}</h1>
        <h6 className="timezone">{location.timezone}</h6>
      </div>
      <h6>
        In {location.state}, {location.country}
      </h6>
    </main>
  );
}

export default Main;
