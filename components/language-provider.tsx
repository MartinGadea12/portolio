"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  experiences,
  projects,
  skillCategories,
  stats,
  education as educationMeta,
} from "@/lib/profile";
import type { Locale } from "@/lib/i18n/types";
import { defaultLocale } from "@/lib/i18n/types";
import { translations, type TranslationSchema } from "@/lib/i18n/translations";

const STORAGE_KEY = "portfolio-locale";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationSchema;
  experiences: (typeof experiences)[number] & {
    period: string;
    title: string;
    description: string;
  }[];
  projects: (typeof projects)[number] & { description: string }[];
  skillCategories: (typeof skillCategories)[number] & { title: string }[];
  stats: { value: string; label: string }[];
  education: (typeof educationMeta)[number] & { title: string }[];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "es" ? stored : defaultLocale;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(readStoredLocale());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale;
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale, mounted]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const t = translations[locale];

  const value = useMemo<LanguageContextValue>(() => {
    const localizedExperiences = experiences.map((exp, i) => ({
      ...exp,
      ...t.experiences[i],
    }));

    const localizedProjects = projects.map((project, i) => ({
      ...project,
      description: t.projects[i]?.description ?? project.description,
    }));

    const localizedSkills = skillCategories.map((cat, i) => ({
      ...cat,
      title: t.skillCategories[i]?.title ?? cat.title,
    }));

    const localizedStats = stats.map((stat, i) => ({
      value: stat.value,
      label: t.stats[i]?.label ?? stat.label,
    }));

    const localizedEducation = educationMeta.map((item, i) => ({
      ...item,
      title: t.education[i]?.title ?? item.title,
    }));

    return {
      locale,
      setLocale,
      t,
      experiences: localizedExperiences,
      projects: localizedProjects,
      skillCategories: localizedSkills,
      stats: localizedStats,
      education: localizedEducation,
    };
  }, [locale, setLocale, t]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
