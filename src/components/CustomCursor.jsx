import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler); //After Unmounting, it remove this action and escape from memory leak.
  });

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-9999"
      style={{
        transform: `translate(${position.x - 40}px,${position.y - 40}px)`, //Here , -40px to make cursor in middle of CustomCursor.Here, `` is used to combine CSS and JS.
      }}
    >
      <div className="w-20 h-20 rounded-full bg-linear-to-r from-[#00FFFF] via-[#00BFFF] to-[#0066FF] shadow-[0_0_20px_#00ffff] blur-xl opacity-80" />
    </div>
  );
}
