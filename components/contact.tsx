"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { profile } from "@/lib/profile";
import {
  emailjsConfig,
  getEmailjsErrorMessage,
  isGmailAuthError,
  toTemplateParams,
} from "@/lib/emailjs";
import { useLanguage } from "./language-provider";

export function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<"success" | "error" | null>(null);
  const [errorDetail, setErrorDetail] = useState<string | null>(null);

  useEffect(() => {
    emailjs.init({ publicKey: emailjsConfig.publicKey });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);
    setErrorDetail(null);

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        toTemplateParams(formState),
        { publicKey: emailjsConfig.publicKey }
      );

      setFeedback("success");
      setFormState({ name: "", email: "", message: "" });
    } catch (err) {
      const message = getEmailjsErrorMessage(err);
      console.error("EmailJS send failed:", message, err);
      setErrorDetail(
        isGmailAuthError(err) ? t.contact.gmailReconnect : message
      );
      setFeedback("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label={t.sections.contact}
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          {t.sections.contact}
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="mb-6 space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            {t.contact.heading}
          </h3>
          <p className="text-sm text-muted-foreground">{t.contact.intro}</p>
        </div>

        <div className="mb-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="size-4 text-primary" />
            <span>{profile.email}</span>
          </a>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" />
            <span>{t.profile.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="size-4 text-primary" />
            <span>{t.profile.availability}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                {t.contact.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full rounded-md border border-border bg-secondary/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder={t.contact.namePlaceholder}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                {t.contact.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full rounded-md border border-border bg-secondary/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder={t.contact.emailPlaceholder}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              {t.contact.message}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
              className="w-full resize-none rounded-md border border-border bg-secondary/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              placeholder={t.contact.messagePlaceholder}
            />
          </div>

          {feedback === "success" && (
            <p role="status" className="text-sm text-primary">
              {t.contact.success}
            </p>
          )}
          {feedback === "error" && (
            <p role="alert" className="text-sm text-destructive">
              {t.contact.error}
              {errorDetail ? (
                <span className="mt-1 block text-xs opacity-80">
                  {errorDetail}
                </span>
              ) : null}
            </p>
          )}

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <span className="size-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                {t.contact.sending}
              </>
            ) : (
              <>
                <Send className="size-4" />
                {t.contact.submit}
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
