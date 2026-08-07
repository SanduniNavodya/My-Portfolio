"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { experiences } from "@/constants";

const Experience = () => {
  return (
    <section id="experience" className="relative overflow-hidden py-24 md:py-32 bg-white/35">
      <div className="mx-auto max-w-7xl section-pad">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 md:mb-16 max-w-2xl"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
            Career
          </p>
          <h2 className="section-title">Experience</h2>
          <p className="section-lead">
            Roles spanning healthcare automation, data engineering, and AI-driven solutions.
          </p>
        </motion.div>

        <div className="relative space-y-5">
          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-gradient-to-br from-white/80 to-white/40 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent to-accent-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-4 space-y-4">
                  <div className="relative flex h-12 w-full max-w-[220px] items-center rounded-lg bg-white px-2 py-1">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={220}
                      height={48}
                      unoptimized
                      className="h-10 w-auto max-w-full object-contain object-left"
                    />
                  </div>

                  <p className="inline-flex rounded-full bg-accent-faint px-3 py-1 text-xs font-medium text-accent">
                    {exp.period}
                  </p>

                  <div className="space-y-1.5 text-sm text-ink-muted">
                    <p className="flex items-start gap-2">
                      <MapPin size={15} className="mt-0.5 shrink-0 text-accent" />
                      <span>{exp.address}</span>
                    </p>
                    {"addressNote" in exp && exp.addressNote && (
                      <p className="pl-[23px] text-xs text-ink-muted/80">
                        {exp.addressNote}
                      </p>
                    )}
                  </div>
                </div>

                <div className="md:col-span-8">
                  <h3 className="font-display text-2xl font-medium text-ink sm:text-3xl">
                    {exp.role}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p className="text-base font-medium text-accent">{exp.company}</p>
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-ink-muted transition-colors hover:text-accent"
                    >
                      Visit website
                      <ExternalLink size={13} />
                    </a>
                  </div>
                  <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
