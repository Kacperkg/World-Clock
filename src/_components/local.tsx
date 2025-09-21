"use client";

import { useEffect, useState } from "react";

export default function LocalTimezone() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, [date]);

  function getDay(date: Date) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[date.getDay()];
  }

  function getMonth(date: Date) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[date.getMonth()];
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-4 text-9xl font-bold">
        <h1>{date.getHours()}</h1>
        <span className="text-7xl">:</span>
        <h1>{date.getMinutes()}</h1>
        <span className="text-7xl">:</span>
        <h1>{date.getSeconds()}</h1>
      </div>
      <div className="mt-20 flex w-full items-center justify-between">
        <div className="flex flex-col items-start">
          <h1>{getDay(date)}</h1>
          <h1>
            {getMonth(date)} {date.getDate()} {date.getFullYear()}
          </h1>
        </div>
        <div className="flex gap-6 rounded-xl border border-white px-6 py-2">
          <h1>12</h1>
          <h1>24</h1>
        </div>
      </div>
    </div>
  );
}
