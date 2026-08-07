"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { experiences } from "@/constants";

const Experience = () => {
  return (
    <section id="experience" className="relative overflow-hidden section-y bg-white/35">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-head"
        >
          <div>
            <p className="mb-1.5 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Career
            </p>
            <h2 className="section-title">Experience</h2>
          </div>
          <p className="section-lead">
            Roles spanning healthcare automation, data engineering, and AI-driven solutions.
          </p>
        </motion.div>

        <div className="relative divide-y divide-ink/10 border-y border-ink/10">
          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="grid grid-cols-1 gap-4 py-5 md:grid-cols-12 md:gap-6 md:py-6"
            >
              <div className="md:col-span-3 space-y-2">
                <div className="relative flex h-9 w-full max-w-[180px] items-center">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={180}
                    height={36}
                    unoptimized
                    className="h-8 w-auto max-w-full object-contain object-left"
                  />
                </div>
                <p className="text-sm font-medium text-accent">{exp.period}</p>
                <p className="flex items-center gap-1.5 text-sm text-ink-muted">
                  <MapPin size={13} className="shrink-0 text-accent" />
                  <span>{exp.location ?? exp.address}</span>
                </p>
              </div>

              <div className="md:col-span-9">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-xl font-medium text-ink sm:text-2xl">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-ink-soft">{exp.company}</p>
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-ink-muted transition-colors hover:text-accent"
                  >
                    Website
                    <ExternalLink size={12} />
                  </a>
                </div>
                <p className="mt-2 max-w-4xl leading-relaxed text-ink-muted">
                  {exp.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
