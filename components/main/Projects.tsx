"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/constants";

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden py-24 md:py-32 bg-white/40">
      <div className="mx-auto max-w-7xl section-pad">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
            Selected work
          </p>
          <h2 className="section-title">Projects</h2>
          <p className="section-lead">
            Applications spanning machine learning, IoT, full-stack development, and generative AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projects.map((project, index) => {
            const featured = index < 2;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group relative overflow-hidden rounded-2xl border border-ink/10 bg-gradient-to-br from-white/90 to-paper/80 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 ${
                  featured ? "lg:col-span-1 min-h-[280px]" : ""
                }`}
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/5 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative flex h-full flex-col">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <span className="font-display text-3xl text-ink/15 transition-colors group-hover:text-accent/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {"githubLink" in project && project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-white/70 text-ink-muted transition-all hover:border-accent hover:text-accent hover:bg-accent-faint"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>

                  <h3 className="font-display text-2xl font-medium text-ink transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-ink-muted">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-accent-faint px-2.5 py-1 text-xs tracking-wide text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="text-xs text-ink-muted">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {"githubLink" in project && project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft opacity-0 transition-all group-hover:opacity-100 hover:text-accent"
                    >
                      View repository
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
