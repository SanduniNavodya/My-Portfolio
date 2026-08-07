"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, profile } from "@/constants";

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden section-y bg-surface/40">
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
              Selected work
            </p>
            <h2 className="section-title">Projects</h2>
          </div>
          <p className="section-lead">
            Builds across data engineering, ML, IoT, full-stack, and generative AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="group flex h-full flex-col rounded-xl border border-ink/10 bg-surface/80 p-5 transition-all duration-300 hover:border-accent/35 hover:bg-surface hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  {"category" in project && project.category
                    ? project.category
                    : String(index + 1).padStart(2, "0")}
                </span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 text-ink-muted transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                  <ArrowUpRight size={14} />
                </span>
              </div>

              <h3 className="font-display text-xl font-medium text-ink transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted line-clamp-3">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent-faint px-2.5 py-0.5 text-[11px] font-medium text-accent"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-[11px] text-ink-muted">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>

              <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-ink-soft group-hover:text-accent">
                <Github size={13} />
                View repository
              </p>
            </motion.a>
          ))}
        </div>

        <div className="mt-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-ink"
          >
            Archive on GitHub
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
