import { motion } from "framer-motion";
import React from "react";
import s4 from "../assets/s4.png";

export default function About() {
  const stats = [
    { label: "Experience", value: "Fresher" },
    { label: "Speciality", value: "MERN Stack" },
    { label: "Focus", value: "Scalability & Logic" },
  ];
  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-linear-to-r from-[#1A5DFF] via-[#00E0FF] to-[#6A00F4] animate-pulse ${c}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            className="relative w-40 h-40 md:w-[200px] md:h-[200px]
          rounded-2xl overflow-hidden shadow-2xl bg-linear-to-br from-[#1A5DFF]/20 via-[#00E0FF]/20 to-[#6A00F4]/20 border border-[#1A5DFF]/25
          "
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <img src={s4} alt="profile" className="absolute inset-0" />
          </motion.div>

          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2
              className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent
            bg-linear-to-r from-[#1A5DFF] via-[#00E0FF] to-[#6A00F4]
            "
            >
              Sanskar Chaurasia
            </h2>
            <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
              MERN Stack Developer
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">
              I build powerful, scalable full-stack web applications using
              React, Node.js, MySQL, and MongoDB. I combine strong expertise in
              C++, Data Structures & Algorithms, and Artificial Intelligence to
              solve complex problems and deliver high-performance digital
              solutions.
            </p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl">
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="text-sm text-gray-400">{item.label}</div>
                  <div className="text-base font-semibold">{item.value}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-cyan-200 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-lg border border-white/20 bg-white/10 text-white px-5 py-3 hover:bg-white/20 transition"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            About Me
          </h3>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            I am a Full-Stack Developer specializing in React, Node.js, MySQL,
            and MongoDB, focused on building scalable, high-performance web
            applications.
          </p>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            I enjoy solving complex problems and designing efficient, real-world
            software solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
