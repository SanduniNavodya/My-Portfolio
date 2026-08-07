"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { education, profile } from "@/constants";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden section-y">
      <div className="pointer-events-none absolute right-0 top-10 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />

      <div className="section-shell">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <p className="mb-1.5 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              About
            </p>
            <h2 className="section-title">
              Building systems that turn data into decisions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <p className="border-l-2 border-accent/30 pl-5 text-base font-normal leading-relaxed text-ink-muted sm:text-lg">
              {profile.summary}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {education.map((item, i) => (
                <motion.div
                  key={item.school}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                  className="rounded-xl border border-ink/10 bg-white/70 p-4 sm:p-5"
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white ring-1 ring-ink/5"
                      aria-label={`${item.school} website`}
                    >
                      <Image
                        src={item.logo}
                        alt={`${item.school} logo`}
                        width={44}
                        height={44}
                        unoptimized
                        className="h-9 w-9 object-contain"
                      />
                    </a>
                    <p className="text-right text-xs font-medium uppercase tracking-wider text-accent">
                      {item.period}
                    </p>
                  </div>

                  <h3 className="font-display text-lg font-medium text-ink">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sm text-ink-muted">{item.school}</p>
                  <p className="mt-1 text-sm font-medium text-ink-soft">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
