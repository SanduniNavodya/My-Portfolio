"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, profile } from "@/constants";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 72,
      behavior: "smooth",
    });
  }
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = navLinks.map((l) => l.href);
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    scrollToSection(href);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-paper/75 backdrop-blur-xl border-b border-ink/5 shadow-[0_8px_30px_rgba(26,35,50,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="section-pad mx-auto max-w-7xl h-[72px] flex items-center justify-between">
        <div className="w-8 shrink-0" aria-hidden="true" />

        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-ink/10 bg-white/45 p-1.5 backdrop-blur-md shadow-sm shadow-ink/5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-colors ${
                active === link.href
                  ? "text-ink"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {active === link.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-white shadow-sm shadow-ink/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-ink-muted hover:text-accent transition-colors"
          >
            LinkedIn
          </Link>
          <span className="text-ink/20">·</span>
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-ink-muted hover:text-accent transition-colors"
          >
            GitHub
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-ink rounded-full hover:bg-ink/5 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden border-t border-ink/5 bg-paper/95 backdrop-blur-xl"
          >
            <div className="section-pad py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-ink-soft hover:bg-white/70 hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
