import React from "react";
import Link from "next/link";
import { profile } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-white/5 text-white/50">
      <div className="mx-auto max-w-7xl section-pad py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-display text-xl font-medium text-white/80">{profile.name}</p>
          <p className="mt-1 text-sm font-medium tracking-wide">{profile.title}</p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm">
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </Link>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
