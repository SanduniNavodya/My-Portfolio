"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillGroups } from "@/constants";

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl section-pad">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
            Toolkit
          </p>
          <h2 className="section-title">Skills</h2>
          <p className="section-lead">
            Technologies I use to design, automate, and ship data-driven systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-ink/10 bg-white/55 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/25 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-5 flex items-center justify-between border-b border-ink/10 pb-4">
                <h3 className="font-display text-xl font-medium text-ink">
                  {group.title}
                </h3>
                <span className="text-xs text-ink-muted">
                  {group.skills.length} tools
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
