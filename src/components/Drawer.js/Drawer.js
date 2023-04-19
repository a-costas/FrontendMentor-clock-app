import React from "react";

import "./Drawer.scss";
import useFetch from "../../hooks/useFetch";
import { ENDPOINTS } from "../../utils/constants";
import { isDaytime } from "../../utils/helpers";

function Drawer({ isExpanded }) {
  const { data: timezoneData } = useFetch(ENDPOINTS.timezone);

  return (
    <div
      className={`drawerWrapper ${
        isExpanded ? "expandedWrapper " : "collapsedWrapper "
      } ${isDaytime() ? "drawerDaytime" : "drawerNighttime"}`}
    >
      <div className="drawerContent">
        <div className="dataRow">
          <h6>Current Timezone</h6>
          <h5 className="dataBit">{timezoneData.timezone}</h5>
        </div>
        <div className="dataRow">
          <h6>Day of the year</h6>
          <h5 className="dataBit">{timezoneData.day_of_year}</h5>
        </div>
        <div className="dataRow">
          <h6>Day of the week</h6>
          <h5 className="dataBit">{timezoneData.day_of_week}</h5>
        </div>
        <div className="dataRow">
          <h6>Week number</h6>
          <h5 className="dataBit">{timezoneData.week_number}</h5>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
