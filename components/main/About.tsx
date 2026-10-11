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
          </motion.div>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="relative mt-8 lg:mt-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -left-3 top-8 hidden h-[78%] w-[34%] rounded-[1.75rem] border border-accent/35 sm:block"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-3 -right-3 hidden h-24 w-24 rounded-full border border-dashed border-accent/30 lg:block"
          />

          <div className="relative grid overflow-hidden rounded-[1.75rem] border border-ink/10 bg-surface/80 shadow-xl shadow-ink/5 lg:grid-cols-12">
            <div className="relative min-h-[22rem] sm:min-h-[26rem] lg:col-span-5 lg:min-h-[30rem]">
              <Image
                src="/Graduation Photo.jpeg"
                alt="Sanduni Navodya in SLIIT graduation attire"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover object-[center_18%]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/25 via-transparent to-transparent" />

              <p className="absolute left-4 top-4 rounded-full border border-white/40 bg-charcoal/35 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                Class of 2026
              </p>
            </div>

            <div className="relative flex flex-col justify-center overflow-hidden px-6 py-8 sm:px-10 lg:col-span-7 lg:py-12">
              <p
                aria-hidden
                className="pointer-events-none absolute -right-2 bottom-[-0.85rem] select-none font-display text-[7.5rem] font-bold leading-none tracking-tighter text-ink/[0.045] sm:text-[9rem]"
              >
                2:1
              </p>

              <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">
                Officially graduated
              </p>
              <h3 className="relative mt-3 font-display text-[2.35rem] font-bold leading-[0.92] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
                Second Class
                <span className="mt-1 block text-accent">Upper Division</span>
              </h3>
              <p className="relative mt-5 max-w-md text-sm leading-relaxed text-ink-muted sm:text-base">
                BSc (Hons) in Information Technology, specialized in Data
                Science at the Sri Lanka Institute of Information Technology.
              </p>

              <p className="relative mt-4 max-w-md border-l-2 border-accent/40 pl-4 text-sm leading-relaxed text-ink-soft sm:text-base">
                Officially graduated in 2026, completing my degree with Second
                Class Upper Division honours.
              </p>
            </div>
          </div>
        </motion.article>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {education.map((item, i) => (
            <motion.div
              key={item.school}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
              className="rounded-xl border border-ink/10 bg-surface/70 p-4 sm:p-5"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-surface ring-1 ring-ink/5"
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
      </div>
    </section>
  );
};

export default About;
