"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Layers, Zap } from "lucide-react";
import { useLanguage } from "./language-provider";

const statIcons = [Briefcase, Layers, Code2, Zap];

export function Stats() {
  const { stats } = useLanguage();

  return (
    <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {stats.map((stat, index) => {
          const Icon = statIcons[index] ?? Briefcase;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg border border-border/50 bg-card/50 p-4 text-center transition-all hover:border-primary/50 hover:bg-card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <Icon className="mx-auto mb-2 size-5 text-primary" />
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
