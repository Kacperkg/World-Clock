"use client";
import { PlusCircle } from "lucide-react";
import { useState } from "react";

export default function Region() {
  const [city, setCity] = useState("Edinburgh");

  return (
    <div className="flex w-full items-end justify-between">
      <div className="text-8xl font-bold uppercase">
        <h1>{city},</h1>
        <h1>UNITED KINGDOM</h1>
      </div>
      <div className="flex items-center gap-2 opacity-50">
        <h1 className="text-xl">Add Another City</h1>
        <PlusCircle />
      </div>
    </div>
  );
}
