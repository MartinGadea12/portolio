"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
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
const LOCALE_CHANGE_EVENT = "portfolio-locale-change";

type LocalizedExperience = {
  period: string;
  title: string;
  company: string;
  companyUrl: string;
  description: string;
  technologies: readonly string[];
};

type LocalizedProject = {
  title: string;
  description: string;
  technologies: readonly string[];
  link: string;
  github: string;
  image: string;
  featured: boolean;
};

type LocalizedSkillCategory = {
  title: string;
  skills: readonly string[];
};

type LocalizedEducation = {
  title: string;
  institution: string;
  period: string;
};

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationSchema;
  experiences: LocalizedExperience[];
  projects: LocalizedProject[];
  skillCategories: LocalizedSkillCategory[];
  stats: { value: string; label: string }[];
  education: LocalizedEducation[];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "es" ? stored : defaultLocale;
}

function subscribeLocale(onStoreChange: () => void) {
  const handler = () => onStoreChange();
  window.addEventListener("storage", handler);
  window.addEventListener(LOCALE_CHANGE_EVENT, handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener(LOCALE_CHANGE_EVENT, handler);
  };
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(
    subscribeLocale,
    readStoredLocale,
    () => defaultLocale
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    localStorage.setItem(STORAGE_KEY, next);
    window.dispatchEvent(new Event(LOCALE_CHANGE_EVENT));
  }, []);

  const t = translations[locale];

  const value = useMemo<LanguageContextValue>(() => {
    const localizedExperiences: LocalizedExperience[] = experiences.map(
      (exp, i) => ({
        ...exp,
        ...t.experiences[i],
      })
    );

    const localizedProjects: LocalizedProject[] = projects.map((project, i) => ({
      ...project,
      description: t.projects[i]?.description ?? project.description,
    }));

    const localizedSkills: LocalizedSkillCategory[] = skillCategories.map(
      (cat, i) => ({
        ...cat,
        title: t.skillCategories[i]?.title ?? cat.title,
      })
    );

    const localizedStats = stats.map((stat, i) => ({
      value: stat.value,
      label: t.stats[i]?.label ?? stat.label,
    }));

    const localizedEducation: LocalizedEducation[] = educationMeta.map(
      (item, i) => ({
        ...item,
        title: t.education[i]?.title ?? item.title,
      })
    );

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
