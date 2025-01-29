"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Building } from "lucide-react";

const Experience = () => {
  return (
    <div id="experience" className="relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute w-full h-full z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto" />
        </motion.div>

        {/* Experience Ladder */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500" />

          {/* Experience Item */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative ml-12 p-6"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-2.5rem] top-6 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#030014]" />
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-purple-400">
                Data Science Intern
              </h3>
              
              <div className="flex items-center gap-2 text-gray-300">
                <Building size={20} className="text-cyan-400" />
                <span>SLT Digital Lab - Sri Lanka Telecom PLC</span>
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <Calendar size={18} className="text-cyan-400" />
                <span>Dec 2024 - Present</span>
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={18} className="text-cyan-400" />
                <span>Sri Lanka Telecom Head Office, Lotus Road, Colombo-01</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
