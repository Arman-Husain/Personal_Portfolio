"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const experienceData = [
  {
    title: "Frontend Developer Intern",
    company: "SkillCraft",
    date: "Jun 2025 – Jul 2025",
    description:
      "Built responsive web apps using HTML, CSS, JavaScript, and React. Completed 4 internship tasks with modern UI/UX."
  },
  {
    title: "Certificate in Web Development",
    company: "Coursera",
    date: "Apr 2025",
    description:
      "Completed a 10-week course on full-stack development with MERN stack and responsive design."
  }
];

const certificateImages = [
  {
    src: "/cert1.png",
    title: "Deloitte Virtual Internship Certificate"
  },
  {
    src: "/cert3.png",
    title: "Google IT Automation with Python - Coursera"
  },
  {
    src: "/cert2.png",
    title: "Linux Fundamentals - Coursera"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-20 bg-black text-white">
      {/* ✨ Gradient Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
        Experience & Certificates
      </h2>

      {/* 💼 Experience Cards with Glass Effect */}
      <div className="space-y-10 mb-20">
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-700"
          >
            <h3 className="text-2xl font-semibold text-cyan-300">{item.title}</h3>
            <p className="text-sm text-gray-400">
              {item.company} — {item.date}
            </p>
            <p className="mt-2 text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* 🏆 Certificate Grid with Glass Cards */}
      <h3 className="text-2xl font-semibold mb-6 text-center text-purple-300">
        Certificates
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certificateImages.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="rounded-xl overflow-hidden shadow-xl border border-gray-700 bg-white/10 backdrop-blur-md transition-transform"
          >
            <Image
              src={cert.src}
              alt={cert.title}
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="p-4 text-center text-sm text-gray-200">
              {cert.title}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
