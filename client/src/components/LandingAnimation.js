import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faGraduationCap,
  faPodcast,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

const LandingAnimation = ({ onComplete }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Trigger content after initial animation
    setTimeout(() => {
      setShowContent(true);
      // After all animations complete, notify parent
      setTimeout(() => onComplete?.(), 1500);
    }, 2000);
  }, [onComplete]);

  const icons = [
    { icon: faBook, delay: 0.3 },
    { icon: faGraduationCap, delay: 0.4 },
    { icon: faPodcast, delay: 0.5 },
    { icon: faNewspaper, delay: 0.6 },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Modern gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#2A2A2A]"
        style={{
          backgroundImage: `
            radial-gradient(at 40% 20%, rgba(28, 28, 28, 0.4) 0px, transparent 50%),
            radial-gradient(at 80% 0%, rgba(50, 50, 50, 0.3) 0px, transparent 50%),
            radial-gradient(at 0% 50%, rgba(28, 28, 28, 0.4) 0px, transparent 50%)
          `,
        }}
      />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px),
                           linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-7xl font-bold text-white mb-4 font-karla tracking-wider"
        >
          Knowledge Vault
        </motion.h1>

        {showContent && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-xl md:text-2xl text-gray-400 text-center max-w-2xl font-roboto"
          >
            Your personal library of insights from books, courses, podcasts, and
            articles.
          </motion.p>
        )}

        {/* Icons animation */}
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex gap-6 mt-8"
          >
            {icons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: item.delay,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-gray-400 text-2xl hover:text-white transition-colors"
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LandingAnimation;
