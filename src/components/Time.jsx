import React from "react";
import moment from "moment";

function Time(props) {
  const time = moment.unix(props.timestamp).format("MMMM D, h:mm a");

  return <>{time}</>;
}

export default Time;
