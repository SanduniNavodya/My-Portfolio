"use client";

import React, { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { profile } from "@/constants";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          reply_to: form.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Thank you! Your message has been sent.");
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          setLoading(false);
          toast.error("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32 bg-charcoal text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(74,138,171,0.22),_transparent_50%)]" />
      <div className="absolute inset-0 opacity-30 hero-grid" />

      <div className="relative mx-auto max-w-7xl section-pad">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent-soft">
              Contact
            </p>
            <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
              Let&apos;s build something intelligent
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-white/60">
              Open to collaborations, roles, and conversations about data engineering,
              Python development, and intelligent systems.
            </p>

            <div className="mt-10 space-y-3">
              {[
                {
                  icon: Mail,
                  label: profile.email,
                  href: `mailto:${profile.email}`,
                },
                {
                  icon: Phone,
                  label: profile.phone,
                  href: `tel:${profile.phone.replace(/\s/g, "")}`,
                },
                {
                  icon: MapPin,
                  label: profile.location,
                  href: null,
                },
              ].map((item) => {
                const Icon = item.icon;
                const Comp = item.href ? "a" : "div";
                return (
                  <Comp
                    key={item.label}
                    href={item.href || undefined}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white/80 transition-colors hover:border-accent-soft/40 hover:bg-white/10 hover:text-white"
                  >
                    <Icon size={18} className="shrink-0 text-accent-soft" />
                    <span className="text-sm">{item.label}</span>
                  </Comp>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8 lg:col-span-7"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-white/50">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/30 transition-colors focus:border-accent-soft focus:outline-none"
                required
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-300">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-white/50">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/30 transition-colors focus:border-accent-soft focus:outline-none"
                required
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-300">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-white/50">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/30 transition-colors focus:border-accent-soft focus:outline-none"
                required
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-300">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-charcoal transition-all hover:-translate-y-0.5 hover:bg-accent-faint disabled:opacity-60"
            >
              <Send size={16} />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>

      <ToastContainer theme="dark" position="top-right" autoClose={4000} />
    </section>
  );
};

export default Contact;
