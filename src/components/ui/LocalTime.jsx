/** @format */

import { useEffect, useState } from "react";
import { CONTACT } from "../../constants";

const formatTime = () =>
  new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: CONTACT.timezone }).format(
    new Date()
  );

// Live clock in Ritik's timezone; refreshes twice a minute.
const LocalTime = ({ suffix = "" }) => {
  const [time, setTime] = useState(formatTime);
  useEffect(() => {
    const id = setInterval(() => setTime(formatTime()), 30000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="tabular-nums">
      {time}
      {suffix}
    </span>
  );
};

export default LocalTime;
