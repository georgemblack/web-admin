import React from "react";
import { format, fromUnixTime } from "date-fns";

function Time(props) {
  const time = fromUnixTime(props.timestamp);
  return <>{format(time, "LLL d, h:mm a")}</>;
}

export default Time;
