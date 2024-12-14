import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faMagicWandSparkles,
  faLock,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleSendClick = () => {
    setShowComingSoon(true);
    setTimeout(() => setShowComingSoon(false), 3000); // Hide after 3 seconds
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Interface */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-96 h-[600px] bg-[#1A1A1A] rounded-xl shadow-2xl overflow-hidden flex flex-col">
          {/* Coming Soon Tooltip */}
          {showComingSoon && (
            <div className="absolute bottom-4 right-32 z-50">
              <div className="bg-white text-black px-4 py-2 rounded-lg shadow-xl flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  className="text-blue-500"
                />
                <span>Coming soon! We're working on it.</span>
              </div>
            </div>
          )}

          {/* Header */}
          <div className="bg-[#2A2A2A] px-6 py-4 flex justify-between items-center">
            <h3 className="text-white font-medium">Knowledge Vault AI</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Example message */}
            <div className="mb-4">
              <div className="bg-[#2A2A2A] rounded-lg p-3 inline-block max-w-[80%]">
                <p className="text-gray-300">
                  Hi there! Ready to unlock insights from your books, courses,
                  podcasts, and articles? Tell me what you'd like to explore!
                </p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-[#2A2A2A]">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask anything about your knowledge vault..."
                className="flex-1 bg-[#1A1A1A] text-white rounded-lg px-4 py-2 outline-none border-2 border-transparent focus:border-white/10"
                disabled
              />
              <button
                onClick={handleSendClick}
                className="bg-white/10 text-white/50 px-4 py-2 rounded-lg font-medium flex items-center gap-2 cursor-not-allowed"
              >
                <FontAwesomeIcon icon={faLock} className="text-sm" />
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Bubble Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-14 h-14 rounded-full bg-white text-black 
          flex items-center justify-center
          shadow-lg hover:shadow-xl
          transform transition-all duration-300
          hover:scale-105 active:scale-95
          ${isOpen ? "rotate-360" : ""}
        `}
      >
        <FontAwesomeIcon icon={faMagicWandSparkles} className="text-xl" />
      </button>
    </div>
  );
};

export default ChatBubble;
