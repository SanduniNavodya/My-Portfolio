"use client";

import React, { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          toast.success("🎉 Thank you! Your message has been sent.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
              background: "#1f1f38",
              color: "#ffffff",
              border: "1px solid #00FFFF",
            },
            icon: "🚀",
          });
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("⚠️ Something went wrong. Please try again later.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
              background: "#8B0000",
              color: "#ffffff",
              border: "1px solid #FF6347",
            },
            icon: "❌",
          });
        }
      );
  };

  return (
    <section className="relative py-20" id="contact">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch and let's discuss your ideas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500 blur-[100px] opacity-20" />
              <div className="relative space-y-6">
                <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
                <p className="text-gray-300">
                  Feel free to reach out for collaborations or just a friendly hello!
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-300">
                    <Mail className="text-purple-400" size={20} />
                    <span>sanduninavodya01@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300">
                    <Phone className="text-purple-400" size={20} />
                    <span>+94 71 936 98 98</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300">
                    <MapPin className="text-purple-400" size={20} />
                    <span>Ambalantota, Sri Lanka</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Send size={20} />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
