"use client";

import { Github, Linkedin, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/lib/profile";
import { useLanguage } from "./language-provider";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";

const socials = [
  { name: "GitHub", href: profile.githubUrl, icon: Github },
  { name: "LinkedIn", href: profile.linkedinUrl, icon: Linkedin },
  { name: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export function Hero() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("");

  const navigation = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = profile.cvPath;
    link.download = profile.cvDownloadName;
    link.click();
  };

  return (
    <header className="sticky top-0 left-0 flex h-screen flex-col overflow-hidden py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="shrink-0"
      >
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {profile.name}
        </h1>
        <h2 className="mt-3 text-lg font-medium text-primary">
          {t.profile.role}
        </h2>
        <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
          {t.profile.tagline}
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <motion.button
            onClick={handleDownloadCV}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Download className="size-4" />
            {t.hero.downloadCv}
          </motion.button>
          <LanguageToggle />
          <ThemeToggle />
        </motion.div>
      </motion.div>

      <nav
        className="mt-12 hidden shrink-0 lg:block"
        aria-label={t.hero.navAria}
      >
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col gap-5"
        >
          {navigation.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
            >
              <a
                href={item.href}
                className={`group flex items-center gap-4 text-xs font-bold uppercase tracking-widest transition-colors ${
                  activeSection === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span
                  className={`h-px transition-all ${
                    activeSection === item.href
                      ? "w-16 bg-foreground"
                      : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
                  }`}
                />
                {item.name}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>

      <div className="min-h-10 flex-1 lg:min-h-14" aria-hidden="true" />

      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex shrink-0 items-center gap-5 pt-2"
        aria-label={t.hero.socialAria}
      >
        {socials.map((social, index) => (
          <motion.li
            key={social.name}
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
          >
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-muted-foreground transition-colors hover:text-foreground"
              aria-label={social.name}
            >
              <social.icon className="size-6" />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </header>
  );
}
