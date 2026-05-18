"use client";

import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "./language-provider";
import { isRoutableLink } from "@/lib/utils";

export function Projects() {
  const { t, projects } = useLanguage();

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label={t.projectsUi.sectionAria}
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          {t.sections.projects}
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {projects.map((project, index) => {
            const hasDemo = isRoutableLink(project.link);
            const hasGithub = isRoutableLink(project.github);

            return (
              <motion.li
                key={project.title}
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3 className="text-base font-medium leading-tight text-foreground">
                      {hasDemo ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-baseline hover:text-primary focus-visible:text-primary"
                          aria-label={project.title}
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                          <span>
                            {project.title}
                            {project.featured && (
                              <span className="ml-2 inline-flex items-center rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-semibold text-primary">
                                {t.projectsUi.featured}
                              </span>
                            )}
                            <ArrowUpRight className="ml-1 inline-block size-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                          </span>
                        </a>
                      ) : (
                        <span>
                          {project.title}
                          {project.featured && (
                            <span className="ml-2 inline-flex items-center rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-semibold text-primary">
                              Destacado
                            </span>
                          )}
                        </span>
                      )}
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-muted-foreground">
                      {project.description}
                    </p>

                    {(hasGithub || hasDemo) && (
                      <div className="mt-3 flex items-center gap-3">
                        {hasGithub && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Github className="size-3.5" />
                            {t.projectsUi.code}
                          </a>
                        )}
                        {hasDemo && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <ExternalLink className="size-3.5" />
                            {t.projectsUi.demo}
                          </a>
                        )}
                      </div>
                    )}

                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label={t.projectsUi.techAria}
                    >
                      {project.technologies.map((tech) => (
                        <li key={tech} className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                            {tech}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="z-10 sm:order-1 sm:col-span-2 sm:translate-y-1">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className="relative aspect-video overflow-hidden rounded border-2 border-border/50 bg-secondary/30 transition group-hover:border-primary/50"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-70 transition-opacity group-hover:opacity-100"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
