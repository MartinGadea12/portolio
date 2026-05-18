"use client";

import { useLanguage } from "./language-provider";
import type { Locale } from "@/lib/i18n/types";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();

  const options: Locale[] = ["es", "en"];

  return (
    <div
      className="inline-flex rounded-md border border-border bg-secondary/50 p-0.5"
      role="group"
      aria-label={t.language.switchTo}
    >
      {options.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={`min-w-[2.25rem] rounded px-2 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
            locale === code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-pressed={locale === code}
        >
          {t.language[code]}
        </button>
      ))}
    </div>
  );
}
