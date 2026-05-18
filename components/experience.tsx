"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "./language-provider";
import { isRoutableLink } from "@/lib/utils";

export function Experience() {
  const { t, experiences } = useLanguage();

  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label={t.experienceUi.sectionAria}
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          {t.sections.experience}
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => {
            const hasCompanyLink = isRoutableLink(exp.companyUrl);

            return (
              <motion.li
                key={`${exp.company}-${exp.period}`}
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                  <header
                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2"
                    aria-label={exp.period}
                  >
                    {exp.period}
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-foreground">
                      {hasCompanyLink ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-baseline text-base font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary"
                          aria-label={`${exp.title} — ${exp.company}`}
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                          <span>
                            {exp.title}{" "}
                            <span className="inline-block">
                              · {exp.company}
                              <ArrowUpRight className="ml-1 inline-block size-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                            </span>
                          </span>
                        </a>
                      ) : (
                        <span className="text-base font-medium leading-tight">
                          {exp.title} · {exp.company}
                        </span>
                      )}
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-muted-foreground">
                      {exp.description}
                    </p>
                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label={t.experienceUi.techAria}
                    >
                      {exp.technologies.map((tech) => (
                        <li key={tech} className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                            {tech}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
