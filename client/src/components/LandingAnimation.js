import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faGraduationCap,
  faPodcast,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

const LandingAnimation = ({ children }) => {
  const { scrollY } = useScroll();

  // Transform values based on scroll
  const landingOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const landingScale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const contentOpacity = useTransform(scrollY, [100, 300], [0, 1]);
  const contentY = useTransform(scrollY, [0, 300], [100, 0]);

  // New: Transform for pointer-events
  const landingPointerEvents = useTransform(
    scrollY,
    [0, 200],
    ["auto", "none"]
  );

  const icons = [
    { icon: faBook, delay: 0.3 },
    { icon: faGraduationCap, delay: 0.4 },
    { icon: faPodcast, delay: 0.5 },
    { icon: faNewspaper, delay: 0.6 },
  ];

  return (
    <div className="h-[200vh] bg-black">
      {/* Fixed landing screen */}
      <motion.div
        style={{
          opacity: landingOpacity,
          scale: landingScale,
          pointerEvents: landingPointerEvents, // Add this
        }}
        className="fixed inset-0 flex flex-col items-center justify-center z-20"
      >
        {/* Landing content remains the same */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-7xl font-bold text-white mb-4 font-karla tracking-wider"
        >
          Knowledge Vault
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl md:text-2xl text-gray-400 text-center max-w-2xl font-roboto"
        >
          Your personal library of insights from books, courses, podcasts, and
          articles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex gap-6 mt-8"
        >
          {icons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: item.delay + 1.5,
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-8 text-white text-sm"
        >
          Scroll down to explore
        </motion.div>
      </motion.div>

      {/* Content section */}
      <motion.div
        style={{
          opacity: contentOpacity,
          y: contentY,
          pointerEvents: useTransform(scrollY, [200, 300], ["none", "auto"]), // Add this
        }}
        className="relative z-10 min-h-screen pt-[100vh]"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default LandingAnimation;
