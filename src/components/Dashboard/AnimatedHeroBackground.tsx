
import { useEffect, useState } from "react";

export default function AnimatedHeroBackground() {
  const [advice, setAdvice] = useState<string>("");

  // Fetch random advice using the Advice Slip API
  useEffect(() => {
    const fetchAdvice = async () => {
      try {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data?.slip?.advice || "Stay positive!");
      } catch {
        setAdvice("Can't load advice right now.");
      }
    };
    fetchAdvice();
    // Optionally refresh every 20s
    const interval = setInterval(fetchAdvice, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none z-0"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      {/* Solid background replacing gradient */}
      <div
        className="w-full h-full bg-soft-purple"
        style={{
          position: "absolute",
          inset: "0"
        }}
      />
      {/* Advice overlay */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 sm:bottom-10 bg-white/80 px-6 py-2.5 rounded-xl shadow-md text-violet-600 text-center font-semibold text-lg max-w-xl mx-auto pointer-events-auto transition-all">
        <span role="img" aria-label="💡" className="mr-2">💡</span>
        {advice}
      </div>
    </div>
  );
}

