"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function Reveal({
  children,
}: {
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let frameId = 0;

    const updateReflection = () => {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();

        if (!rect.width || !rect.height) return;

        const x = Math.max(
          0,
          Math.min(100, ((pointerX - rect.left) / rect.width) * 100)
        );

        const y = Math.max(
          0,
          Math.min(100, ((pointerY - rect.top) / rect.height) * 100)
        );

        const dx = pointerX - (rect.left + rect.width / 2);
        const dy = pointerY - (rect.top + rect.height / 2);

        const pointerAngle =
          (Math.atan2(dy, dx) * 180) / Math.PI + 180;

        const scrollAngle = window.scrollY * 0.06;
        const angle = (pointerAngle + scrollAngle + 360) % 360;

        element.style.setProperty("--reflection-angle", `${angle}deg`);
        element.style.setProperty("--shine-x", `${x}%`);
        element.style.setProperty("--shine-y", `${y}%`);
      });
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      updateReflection();
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("scroll", updateReflection, {
      passive: true,
    });
    window.addEventListener("resize", updateReflection);

    updateReflection();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", updateReflection);
      window.removeEventListener("resize", updateReflection);
    };
  }, []);

  return (
    <div ref={ref} className="glass-box">
      {children}
    </div>
  );
}