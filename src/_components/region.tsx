"use client";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { useOverlayStore } from "~/store";

export default function Region() {
  const [city, setCity] = useState("Edinburgh");
  const { open } = useOverlayStore();

  return (
    <div className="flex w-full items-end justify-between">
      <div className="text-8xl font-extrabold uppercase">
        <h1>{city},</h1>
        <h1>UNITED KINGDOM</h1>
      </div>
      <button
        className="flex cursor-pointer items-center gap-2 opacity-50"
        type="button"
        onClick={open}
      >
        <h1 className="text-xl">Add Another City</h1>
        <PlusCircle />
      </button>
    </div>
  );
}
