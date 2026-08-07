"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillGroups } from "@/constants";

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden section-y">
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
              Toolkit
            </p>
            <h2 className="section-title">Skills</h2>
          </div>
          <p className="section-lead">
            Technologies I use to design, automate, and ship data-driven systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-xl border border-ink/10 bg-surface/70 p-4 sm:p-5"
            >
              <div className="mb-3 flex items-center justify-between border-b border-ink/10 pb-2.5">
                <h3 className="font-display text-lg font-medium text-ink">
                  {group.title}
                </h3>
                <span className="text-xs text-ink-muted">{group.skills.length}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-chip !px-2.5 !py-1 !text-xs">
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
