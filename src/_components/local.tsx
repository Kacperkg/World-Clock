"use client";

import { useEffect, useState } from "react";
import { getOrCreateUserId } from "~/middleware/user";
import { useUser } from "~/store";

export default function LocalTimezone() {
  const [date, setDate] = useState(new Date());
  const [userUuid, setUserUuid] = useState("");
  const { user, loading, error, getUser } = useUser();

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, [date]);

  useEffect(() => {
    setUserUuid(getOrCreateUserId()!);
    getUser(userUuid);
  }, [userUuid]);

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

  if (loading) return <div>loading...</div>;
  if (error) return <div>loading...</div>;

  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-4 text-9xl leading-40 font-extrabold">
        <TimeUnit value={date.getHours()} />
        <span className="text-7xl text-zinc-800">:</span>
        <TimeUnit value={date.getMinutes()} />
        <span className="text-7xl text-zinc-800">:</span>
        <TimeUnit value={date.getSeconds()} />
      </div>
      <div className="mt-20 flex w-full items-center justify-between">
        <div className="font-base flex flex-col items-start text-2xl">
          <h1>{getDay(date)}</h1>
          <h1>
            {getMonth(date)} {date.getDate()} {date.getFullYear()}
          </h1>
        </div>
        <div className="flex gap-6 rounded-xl border-2 border-white px-6 py-2">
          <h1>12</h1>
          <h1>24</h1>
        </div>
      </div>
    </div>
  );
}

const TimeUnit = ({ value }: { value: number }) => {
  const strValue = padZero(value);
  return (
    <div className="flex gap-1">
      {strValue.split("").map((digit, idx) => {
        // let nextDigit;
        // if (idx === 0) {
        //   const firstDigit = parseInt(strValue.charAt(0), 10);
        //   if (firstDigit === 2) {
        //     nextDigit = 0;
        //   } else {
        //     nextDigit = (firstDigit + 1) % 3;
        //   }
        // } else {
        //   const firstDigit = parseInt(strValue.charAt(0), 10);
        //   const secondDigit = parseInt(digit, 10);
        //   if (firstDigit === 2) {
        //     nextDigit = (secondDigit + 1) % 4;
        //   } else {
        //     nextDigit = (secondDigit + 1) % 10;
        //   }
        // }
        return (
          <div
            key={idx}
            className="relative w-30 rounded-xl bg-zinc-800 p-2 text-stone-200"
          >
            <h1 className="w-full text-center">{digit}</h1>
            {/* <h1 className="bg-green-500 text-center">{nextDigit}</h1> */}
          </div>
        );
      })}
    </div>
  );
};

// const Minutes = ({ value }: { value: number }) => {
//   const strValue = padZero(value);
//   return (
//     <div className="flex gap-1">
//       {strValue.split("").map((digit, idx) => {
//         // let nextDigit;
//         // if (idx === 0) {
//         //   nextDigit = (parseInt(digit, 10) + 1) % 6;
//         // } else {
//         //   nextDigit = (parseInt(digit, 10) + 1) % 10;
//         // }
//         return (
//           <div
//             key={idx}
//             className="relative h-34 w-26 overflow-x-visible rounded-xl bg-zinc-800 p-2 text-stone-200"
//           >
//             <h1 className="text-center">{digit}</h1>
//             {/* <h1 className="bg-green-500 text-center">{nextDigit}</h1> */}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// const Seconds = ({ value }: { value: number }) => {
//   const strValue = padZero(value);
//   return (
//     <div className="flex gap-1">
//       {strValue.split("").map((digit, idx) => {
//         // let nextDigit;
//         // if (idx === 0) {
//         //   nextDigit = (parseInt(digit, 10) + 1) % 6;
//         // } else {
//         //   nextDigit = (parseInt(digit, 10) + 1) % 10;
//         // }
//         return (
//           <div
//             key={idx}
//             className="relative h-34 w-26 overflow-x-visible rounded-xl bg-zinc-800 p-2 text-stone-200"
//           >
//             <h1 className="text-center">{digit}</h1>
//             {/* <h1 className="bg-green-500 text-center">{nextDigit}</h1> */}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

function padZero(num: number) {
  return num.toString().padStart(2, "0");
}
