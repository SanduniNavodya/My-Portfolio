"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { education, profile } from "@/constants";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto max-w-7xl section-pad">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
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
            <div className="glass-panel p-6 sm:p-8 md:p-10">
              <p className="text-lg leading-relaxed text-ink-soft sm:text-xl">
                {profile.summary}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {education.map((item, i) => (
                <motion.div
                  key={item.school}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                  className="group rounded-2xl border border-ink/10 bg-white/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-lg hover:shadow-accent/5"
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-ink/5"
                      aria-label={`${item.school} website`}
                    >
                      <Image
                        src={item.logo}
                        alt={`${item.school} logo`}
                        width={56}
                        height={56}
                        unoptimized
                        className="h-12 w-12 object-contain"
                      />
                    </a>
                    <p className="text-right text-xs font-medium uppercase tracking-wider text-accent">
                      {item.period}
                    </p>
                  </div>

                  <h3 className="font-display text-xl font-medium text-ink">
                    {item.degree}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted">{item.school}</p>
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
