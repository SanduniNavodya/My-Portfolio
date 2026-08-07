"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { awards, certifications } from "@/constants";

const Awards = () => {
  return (
    <section
      id="awards"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-section-fade opacity-70" />

      <div className="relative mx-auto max-w-7xl section-pad">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl md:mb-20"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
            Recognition
          </p>
          <h2 className="section-title">Awards & Certifications</h2>
          <p className="section-lead">
            Academic honors, competition wins, and verified credentials.
          </p>
        </motion.div>

        {/* Awards — timeline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-20 md:mb-28"
        >
          <div className="mb-8 flex items-end justify-between gap-4 border-b border-ink/10 pb-4">
            <h3 className="font-display text-2xl font-medium text-ink sm:text-3xl">
              Awards
            </h3>
            <span className="text-sm text-ink-muted">
              {awards.length} recognitions
            </span>
          </div>

          <ol className="relative space-y-0">
            {awards.map((item, i) => (
              <motion.li
                key={`${item.title}-${item.issuer}`}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group grid grid-cols-[4.5rem_1fr] gap-4 border-b border-ink/8 py-6 sm:grid-cols-[6rem_1fr_auto] sm:gap-8 md:py-7"
              >
                <span className="font-display text-lg font-medium text-accent sm:text-xl">
                  {item.year}
                </span>
                <div className="min-w-0">
                  <p className="text-base font-semibold leading-snug text-ink sm:text-lg">
                    {item.title}
                  </p>
                  <p className="mt-1.5 text-sm text-ink-muted">{item.issuer}</p>
                </div>
                <span className="hidden font-display text-sm text-ink/20 transition-colors group-hover:text-accent/40 sm:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.li>
            ))}
          </ol>
        </motion.div>

        {/* Certifications — linked rows */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <div className="mb-8 flex items-end justify-between gap-4 border-b border-ink/10 pb-4">
            <h3 className="font-display text-2xl font-medium text-ink sm:text-3xl">
              Certifications
            </h3>
            <span className="text-sm text-ink-muted">
              {certifications.length} credentials
            </span>
          </div>

          <ul className="divide-y divide-ink/8 border-b border-ink/8">
            {certifications.map((item, i) => (
              <motion.li
                key={`${item.title}-${item.issuer}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3) }}
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-1 items-center gap-2 py-5 transition-colors sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_auto] sm:gap-6 md:py-5"
                >
                  <span className="font-medium leading-snug text-ink transition-colors group-hover:text-accent">
                    {item.title}
                  </span>
                  <span className="text-sm text-ink-muted">
                    {item.issuer}
                    <span className="mx-2 text-ink/20">·</span>
                    {item.year}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors group-hover:text-accent">
                    View
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
