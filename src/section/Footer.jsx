// src/components/Footer.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";

const socials = [
  {
    Icon: FaXTwitter,
    label: "X",
    href: "",
  },
  {
    Icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sanskar-chaurasia-70a378266",
  },
  {
    Icon: FaInstagram,
    label: "Instagram",
    href: "",
  },
  {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/Sanskar123-456",
  },
];

const glowVariants = {
  initial: {
    scale: 1,
    y: 0,
    rotate: 0,
    filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
  },

  hover: {
    scale: 1.18,
    y: -5,
    rotate: -5,
    filter: `
      drop-shadow(0 0 8px rgba(26, 93, 255, 0.9))
      drop-shadow(0 0 16px rgba(0, 224, 255, 0.8))
      drop-shadow(0 0 28px rgba(0, 224, 255, 0.6))
      drop-shadow(0 0 40px rgba(26, 93, 255, 0.4))
    `,
    transition: {
      type: "spring",
      stiffness: 320,
      damping: 15,
    },
  },

  tap: {
    scale: 0.92,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#050a30] border-t border-cyan-500/10">
      {/* Premium Background */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-[#050a30] via-[#071544] to-black opacity-95" />

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_15%,rgba(26,93,255,0.20),transparent_75%)]" />

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(45%_45%_at_80%_80%,rgba(0,224,255,0.12),transparent_75%)]" />

      {/* Premium Top Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-linear-to-r from-transparent via-cyan-400/80 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-10 py-8 md:py-10 flex flex-col items-center text-center space-y-4"
      >
        {/* Name */}

        <div className="w-full">
          <h1
            className="font-bangers font-normal text-white text-center select-none"
            style={{
              fontSize: "clamp(2.5rem, 4vw, 6rem)",
              letterSpacing: "0.06em",
              lineHeight: 0.9,
              paddingLeft: "3vw",
              paddingRight: "3vw",
              whiteSpace: "nowrap",
              textShadow: `
      0 0 10px rgba(13,88,204,0.25),
      0 2px 18px rgba(0,0,0,0.35)
    `,
            }}
          >
            Sanskar Chaurasia
          </h1>
        </div>

        {/* Accent Line */}

        <div className="h-0.5 w-28 rounded-full bg-linear-to-r from-[#1A5DFF] via-[#4FC3F7] to-[#00E0FF]" />

        {/* Social Icons */}

        <div className="flex gap-6 text-2xl md:text-3xl">
          {socials.map(({ Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              variants={glowVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="text-slate-300 hover:text-cyan-300 transition-all duration-300"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        {/* Quote */}

        <p className="text-slate-300 italic text-sm md:text-base max-w-xl leading-relaxed">
          "Success is not luck; it's preparation, persistence, and patience."
        </p>

        {/* Copyright */}

        <p className="text-xs text-slate-500 tracking-wider">
          © {new Date().getFullYear()} Sanskar Chaurasia. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
