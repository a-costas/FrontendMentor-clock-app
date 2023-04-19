import React from "react";

import "./Drawer.scss";

import useFetch from "../../hooks/useFetch";
import { ENDPOINTS } from "../../utils/constants";

function Drawer({ isExpanded }) {
  const { data: timezoneData, loading, error } = useFetch(ENDPOINTS.timezone);
  console.log(timezoneData);

  return (
    <div
      className={`drawerWrapper ${
        isExpanded ? "expandedWrapper" : "collapsedWrapper"
      }`}
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
