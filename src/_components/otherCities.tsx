export default function OtherCities() {
  return (
    <div className="grid w-full grid-cols-4">
      <div className="flex aspect-video max-w-xs flex-col justify-between rounded-xl border-2 border-white p-4">
        <div className="flex items-end justify-between">
          <h1>Los Angeles</h1>
          <h3 className="opacity-50">UTC-8</h3>
        </div>
        <div className="flex items-end justify-between">
          <h1 className="text-4xl">00:00</h1>
          <h3 className="opacity-50">Night</h3>
        </div>
      </div>
    </div>
  );
}
