import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DetailedNotes = ({ notes }) => {
  const [openSections, setOpenSections] = useState({});
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    setActiveSection(openSections[key] ? null : key);
  };

  return (
    <div className="space-y-4">
      {Object.entries(notes).map(([key, value]) => (
        <motion.div
          key={key}
          initial={false}
          className={`rounded-xl overflow-hidden ${
            openSections[key] ? "bg-[#3A3A3A]" : "bg-[#2A2A2A]"
          }`}
        >
          <button
            onClick={() => toggleSection(key)}
            className="w-full px-6 py-4 flex items-center justify-between group transition-all duration-300"
          >
            <span className="text-xl font-karla font-bold text-white group-hover:text-gray-300">
              {key}
            </span>
            <motion.span
              animate={{ rotate: openSections[key] ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400 group-hover:text-white"
            >
              ↓
            </motion.span>
          </button>

          <AnimatePresence>
            {openSections[key] && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-6"
              >
                <div className="prose prose-lg prose-invert max-w-none">
                  {value.split("\n").map((paragraph, idx) => (
                    <p key={idx} className="text-gray-300 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default DetailedNotes;
