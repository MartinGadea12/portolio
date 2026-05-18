"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./language-provider";

export function About() {
  const { t, education } = useLanguage();

  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label={t.sections.about}
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          {t.sections.about}
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-4 text-muted-foreground"
      >
        {t.about.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="pt-4"
        >
          <h3 className="mb-3 text-sm font-semibold text-foreground">
            {t.about.education}
          </h3>
          <ul className="space-y-2 text-sm">
            {education.map((item) => (
              <li key={`${item.title}-${item.institution}`}>
                <span className="font-medium text-foreground">{item.title}</span>
                {" — "}
                {item.institution}
                <span className="text-muted-foreground"> ({item.period})</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm">
            <span className="font-medium text-foreground">
              {t.about.languagesLabel}
            </span>{" "}
            {t.about.languages}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
