export default function Overlay() {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-10 h-screen w-full bg-red-100/50">
      <div className="relative h-full w-full">
        <div className="absolute top-1/2 left-1/2 aspect-square w-[500px] -translate-1/2 bg-red-500"></div>
      </div>
    </div>
  );
}
