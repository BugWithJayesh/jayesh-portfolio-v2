"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
} from "react";
import { LiquidGlass } from "@vepando/liquid-glass-react";

type InteractiveLiquidGlassProps = {
  children: ReactNode;
  radius?: number;
  tint?: string;
  className?: string;
};

export default function InteractiveLiquidGlass({
  children,
  radius = 24,
  tint = "rgba(255,255,255,0.035)",
  className = "",
}: InteractiveLiquidGlassProps) {
  const shellRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    element.style.setProperty(
      "--glass-pointer-x",
      `${Math.max(0, Math.min(100, x))}%`,
    );
    element.style.setProperty(
      "--glass-pointer-y",
      `${Math.max(0, Math.min(100, y))}%`,
    );
    element.dataset.pointerActive = "true";
  }

  function handlePointerLeave(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.dataset.pointerActive = "false";
  }

  useEffect(() => {
    const element = shellRef.current;
    if (!element) return;

    let frameId = 0;

    const updateScrollReflection = () => {
      if (frameId) cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const viewportHeight = Math.max(window.innerHeight, 1);
        const viewportCenter = viewportHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        const progress = Math.max(
          -1,
          Math.min(1, (viewportCenter - elementCenter) / viewportCenter),
        );

        // Keep scroll movement barely visible: at most about 1 pixel.
        element.style.setProperty(
          "--glass-scroll-shift",
          `${(progress * 1.0).toFixed(2)}px`,
        );
        element.style.setProperty(
          "--glass-scroll-y",
          `${(progress * -0.8).toFixed(2)}%`,
        );
      });
    };

    window.addEventListener("scroll", updateScrollReflection, { passive: true });
    window.addEventListener("resize", updateScrollReflection);
    updateScrollReflection();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateScrollReflection);
      window.removeEventListener("resize", updateScrollReflection);
    };
  }, []);

  return (
    <div
      ref={shellRef}
      className={`liquid-glass-shell ${className}`.trim()}
      style={{
        borderRadius: radius,
        "--glass-radius": `${radius}px`,
      } as CSSProperties}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      data-pointer-active="false"
    >
      <LiquidGlass
        radius={radius}
        tint={tint}
        blur={2}
        saturation={1.2}
        dispersion={0.012}
        specular={0.28}
        className="liquid-glass-surface"
      >
        <div className="liquid-glass-content">{children}</div>
      </LiquidGlass>

      <div className="liquid-glass-pointer-light" aria-hidden="true" />
      <div className="liquid-glass-inner-rim" aria-hidden="true" />
    </div>
  );
}
