"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowDown, Download, ArrowUpRight } from "lucide-react";
import { profile } from "@/constants";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 40, damping: 20 });
  const springY = useSpring(my, { stiffness: 40, damping: 20 });

  const handleMouse = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(x * 18);
    my.set(y * 12);
  };

  const resetMouse = () => {
    mx.set(0);
    my.set(0);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = profile.resume;
    link.download = "Sanduni-Navodya-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToWork = () => {
    const el = document.getElementById("experience");
    if (el) {
      window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      className="relative min-h-[100svh] overflow-hidden bg-hero-advanced"
    >
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute -right-20 top-16 h-[420px] w-[420px] rounded-full bg-accent/15 blur-[100px]"
        />
        <div className="absolute -left-24 bottom-10 h-[320px] w-[320px] rounded-full bg-ink/5 blur-[80px]" />
        <div className="absolute left-1/2 top-1/3 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-ink/10 to-transparent" />
      </div>

      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-[0.35]" />

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 section-shell flex min-h-[100svh] flex-col justify-end pb-8 pt-24 lg:justify-center lg:pb-12 lg:pt-20"
      >
        <div className="grid w-full grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:items-center lg:gap-4">
          {/* Copy */}
          <motion.div style={{ y: textY }} className="relative z-20 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/50 px-3.5 py-1.5 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs font-medium tracking-wide text-ink-soft">
                Available for opportunities
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-accent"
            >
              {profile.title}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12 }}
              className="font-display text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-ink"
            >
              <span className="block">{profile.name.split(" ")[0]}</span>
              <span className="block text-gradient-accent">
                {profile.name.split(" ").slice(1).join(" ")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-6 max-w-md text-base font-normal leading-relaxed text-ink-muted sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <button onClick={handleDownload} className="btn-primary group">
                <Download size={16} />
                Download Resume
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
              <button onClick={scrollToWork} className="btn-secondary">
                Explore work
                <ArrowDown size={15} />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-12 hidden items-center gap-8 border-t border-ink/10 pt-6 sm:flex"
            >
              {[
                { label: "WGPA", value: "3.54" },
                { label: "Focus", value: "Python · ML · Data" },
                { label: "Based in", value: "Sri Lanka" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                    {stat.label}
                  </p>
                  <p className="mt-1 font-display text-lg font-medium text-ink">
                    {stat.value}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Portrait stage */}
          <motion.div
            style={{ y: portraitY }}
            className="relative z-10 lg:col-span-7"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] sm:max-w-[480px] lg:ml-auto lg:mr-0 lg:max-w-none lg:aspect-[5/6] xl:max-w-[560px]">
              {/* Soft pedestal glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, delay: 0.2 }}
                className="absolute bottom-[6%] left-1/2 h-[28%] w-[78%] -translate-x-1/2 rounded-[100%] bg-accent/25 blur-3xl"
              />

              {/* Geometric ring behind subject */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-[8%] top-[8%] h-[78%] w-[78%] rounded-full border border-accent/20"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.25 }}
                className="absolute left-[14%] top-[14%] h-[66%] w-[66%] rounded-full bg-gradient-to-br from-white/80 via-accent-faint/60 to-paper-deep/80 shadow-[inset_0_0_60px_rgba(47,111,143,0.08)]"
              />

              {/* Accent arc */}
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                fill="none"
                aria-hidden
              >
                <motion.circle
                  cx="52"
                  cy="48"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="0.35"
                  className="text-accent/40"
                  strokeDasharray="60 200"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.4, delay: 0.4 }}
                />
              </svg>

              {/* Cutout portrait */}
              <motion.div
                style={{ x: springX, y: springY }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 z-10 flex items-end justify-center"
              >
                <div className="relative h-[96%] w-[88%]">
                  <Image
                    src={profile.portrait}
                    alt={profile.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 85vw, 45vw"
                    className="object-contain object-bottom drop-shadow-[0_30px_50px_rgba(26,35,50,0.22)]"
                  />
                  {/* Soft bottom blend into page */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#E4ECF4] via-[#E4ECF4]/70 to-transparent" />
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent" />
    </section>
  );
};

export default Hero;
