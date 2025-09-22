"use client";

import { useUser } from "~/store";
import { useEffect, useState } from "react";

export default function OtherCities() {
  const { user } = useUser();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, [date]);

  return (
    <div className="grid w-full grid-cols-1 content-between gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.isArray(user.locations) &&
        user.locations.map((location) => (
          <div
            key={location.id}
            className="flex aspect-video max-w-xs flex-col justify-between rounded-xl border-2 border-white p-4"
          >
            <div className="flex items-end justify-between">
              <h1>{location.cityName}</h1>
              <h3 className="opacity-50">UTC-8</h3>
            </div>
            <div className="flex items-end justify-between">
              {/* Get the current time in the location's city using its timezone */}
              <h1 className="text-4xl">
                {(() => {
                  try {
                    return date.toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                      timeZone: location.timezone,
                    });
                  } catch {
                    return "00:00";
                  }
                })()}
              </h1>
              <h3 className="opacity-50">Night</h3>
            </div>
          </div>
        ))}
    </div>
  );
}
