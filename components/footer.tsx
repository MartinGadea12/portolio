"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./language-provider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0"
    >
      <p className="leading-relaxed">
        © {new Date().getFullYear()} Martin Gadea. {t.footer.builtWith}{" "}
        <a
          href="https://nextjs.org"
          className="font-medium text-foreground hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </a>{" "}
        {t.footer.and}{" "}
        <a
          href="https://tailwindcss.com"
          className="font-medium text-foreground hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </a>
        . {t.footer.deployedOn}{" "}
        <a
          href="https://vercel.com"
          className="font-medium text-foreground hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vercel
        </a>
        .
      </p>
    </motion.footer>
  );
}
