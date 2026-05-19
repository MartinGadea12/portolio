"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

function subscribeNoop() {
  return () => {};
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribeNoop, () => true, () => false);

  if (!mounted) {
    return (
      <button className="p-2 rounded-full bg-secondary/50" aria-label="Toggle theme">
        <Sun className="size-5 text-muted-foreground" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="size-5 text-foreground" />
      ) : (
        <Moon className="size-5 text-foreground" />
      )}
    </button>
  );
}
