"use client";

import React from "react";
import { motion } from "framer-motion";
import { publications } from "@/constants";

const Publications = () => {
  return (
    <section id="publications" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl section-pad">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-2xl"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
            Research
          </p>
          <h2 className="section-title">Publications</h2>
        </motion.div>

        <div className="max-w-3xl space-y-5">
          {publications.map((pub) => (
            <motion.article
              key={pub.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="rounded-2xl border border-ink/10 bg-gradient-to-br from-accent/5 to-white/60 p-6 sm:p-8"
            >
              <div className="mb-4 inline-flex rounded-full bg-accent-faint px-3 py-1 text-xs font-medium text-accent">
                IEEE EIT 2026 · In press
              </div>
              <h3 className="font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
                {pub.title}
              </h3>
              <p className="mt-4 text-sm text-ink-soft">{pub.authors}</p>
              <p className="mt-2 text-sm italic leading-relaxed text-ink-muted">
                {pub.venue}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
