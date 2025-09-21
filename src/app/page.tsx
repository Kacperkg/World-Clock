import LocalTimezone from "../_components/local";
import Region from "../_components/region";
import OtherCities from "~/_components/otherCities";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-stone-200 text-zinc-900">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        {/* Current time */}
        <LocalTimezone />
        {/* Region */}
        <Region />
        {/* Cities */}
        <OtherCities />
      </div>
    </main>
  );
}
