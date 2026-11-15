"use client";

import { useEffect, useState } from "react";

type Theme = "purple" | "cyan" | "emerald" | "rose" | "amber";

const THEMES: {
  id: Theme;
  label: string;
  color: string;
  ring: string;
}[] = [
  { id: "purple",  label: "Purple theme",  color: "#a78bfa", ring: "#a78bfa" },
  { id: "cyan",    label: "Cyan theme",    color: "#22d3ee", ring: "#22d3ee" },
  { id: "emerald", label: "Emerald theme", color: "#34d399", ring: "#34d399" },
  { id: "rose",    label: "Rose theme",    color: "#fb7185", ring: "#fb7185" },
  { id: "amber",   label: "Amber theme",   color: "#fbbf24", ring: "#fbbf24" },
];

const STORAGE_KEY = "jb-portfolio-theme";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // ignore
  }
}

export default function ThemeSwitcher() {
  const [active, setActive] = useState<Theme>("purple");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read the theme that the inline script already applied (or default)
    const saved = document.documentElement.dataset.theme as Theme | undefined;
    if (saved && THEMES.some((t) => t.id === saved)) {
      setActive(saved);
    }
    setMounted(true);
  }, []);

  function handleSelect(theme: Theme) {
    setActive(theme);
    applyTheme(theme);
  }

  function handleKeyDown(e: React.KeyboardEvent, theme: Theme) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleSelect(theme);
    }
  }

  // Render an invisible placeholder until hydrated to avoid layout shift
  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="flex items-center gap-2 opacity-0 pointer-events-none"
        style={{ width: 148, height: 28 }}
      />
    );
  }

  return (
    <div
      role="group"
      aria-label="Colour theme switcher"
      className="flex items-center gap-2"
    >
      {THEMES.map((theme) => {
        const isActive = active === theme.id;
        return (
          <button
            key={theme.id}
            type="button"
            aria-label={`${theme.label}${isActive ? " (active)" : ""}`}
            aria-pressed={isActive}
            onClick={() => handleSelect(theme.id)}
            onKeyDown={(e) => handleKeyDown(e, theme.id)}
            className="relative flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090d]"
            style={{
              width: 20,
              height: 20,
              backgroundColor: theme.color,
              boxShadow: isActive
                ? `0 0 0 2px #08090d, 0 0 0 4px ${theme.ring}`
                : "none",
            }}
          >
            {isActive && (
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: `0 0 8px 2px ${theme.color}80`,
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
