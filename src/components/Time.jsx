import React from "react";
import moment from "moment";

function Time(props) {
  const time = moment.unix(props.timestamp).format("MMM D, h:mma");

  return <>{time}</>;
}

export default Time;
