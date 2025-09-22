"use client";
import { X } from "lucide-react";
import { useEffect } from "react";
import { useOverlayStore, useUser } from "~/store";
import { type Location } from "~/api/userApi";
import countries from "../../countries.json";
import { div } from "framer-motion/client";

export default function Overlay() {
  const { isOpen, close } = useOverlayStore();

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        close();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-10 h-screen w-full bg-zinc-900/50">
      <div className="relative h-full w-full">
        <div className="absolute top-1/2 left-1/2 w-full max-w-2xl -translate-1/2 rounded-xl bg-zinc-800 p-4 pt-6">
          <CityList />
          <button
            className="absolute top-0 right-0 cursor-pointer p-2 text-stone-200"
            type="button"
            onClick={close}
          >
            <X />
          </button>
        </div>
      </div>
    </div>
  );
}

const CityList = () => {
  const { user } = useUser();
  return (
    <>
      <div className="grid grid-cols-2 gap-4 p-4">
        {Array.isArray(user.locations) &&
          user.locations.map((location) => (
            <City location={location} key={location.id} />
          ))}
      </div>
    </>
  );
};

const City = ({ location }: { location: Location }) => {
  const date = new Date();
  return (
    <button
      key={location.id}
      className="flex cursor-pointer flex-col justify-between rounded-xl border border-stone-200/50 p-4"
    >
      <div className="flex justify-between font-extrabold">
        <div className="flex gap-1 text-4xl text-stone-200">
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
        </div>
        <h1 className="text-xl font-medium text-stone-200/50">
          {location.cityName}
        </h1>
      </div>
    </button>
  );
};

const EditCity = () => {
  return (
    <div className="relative h-8">
      <select
        className="absloute h-auto max-w-3xs overflow-y-auto rounded border border-stone-200/30 bg-stone-900 p-2 text-stone-200"
        size={1}
      >
        {countries.map((country, i) => {
          return (
            <option key={i} value={country.timezones}>
              {country.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
