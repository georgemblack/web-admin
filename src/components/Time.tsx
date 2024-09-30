import { format, parseISO } from "date-fns";

function Time(props: { timestamp: string }) {
  const time = parseISO(props.timestamp);
  return <>{format(time, "LLL d, h:mm a")}</>;
}

export default Time;
