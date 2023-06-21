"use client";

// Imports
import { useState } from "react";
import { motion } from "framer-motion";

// Constants
const NAV_ITEMS = ["web-dev", "investigative-jouralism", "data-visualiztion"];
const PROFESSIONS = [
  "web-developer",
  "investigative-journalist",
  "data-visualization-designer",
  "read.me",
];
const DARK_THEME = "bg-slate-800 text-slate-200";
const LIGHT_THEME = "bg-blue-200 text-blue-800";

// Utility function
const useDarkMode = (initialMode = false) => {
  const [isDarkMode, setIsDarkMode] = useState(initialMode);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const theme = isDarkMode ? DARK_THEME : LIGHT_THEME;
  const textColor = isDarkMode ? "text-slate-200" : "text-blue-800";

  return { isDarkMode, toggleDarkMode, theme, textColor };
};

// Functional Component
export default function Home() {
  const { isDarkMode, toggleDarkMode, theme, textColor } = useDarkMode();

  return (
    <main className={`flex flex-col min-h-screen gap-4 px-6 py-10 ${theme}`}>
      <Navbar
        items={NAV_ITEMS}
        onDarkModeToggle={toggleDarkMode}
        isDarkMode={isDarkMode}
        textColor={textColor}
      />
      <AnimatedHeader text="trevorBrown" delay={0.5} />
      {PROFESSIONS.map((profession, idx) => (
        <AnimatedHeader text={`/${profession}`} delay={idx + 1.5} key={idx} />
      ))}
    </main>
  );
}

// Navbar Component
function Navbar({ items, onDarkModeToggle, isDarkMode, textColor }) {
  return (
    <nav className="flex gap-2 p-1 text-xs">
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`p-2 border-2 rounded-lg hover:bg-sky-600 ${textColor}`}
        >
          {item}
        </div>
      ))}
      <button
        className="px-8 bg-sky-800 text-sky-400 rounded-xl"
        onClick={onDarkModeToggle}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

// AnimatedHeader Component
function AnimatedHeader({ text, delay }) {
  const ANIMATION_CONFIG = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay },
  };
  const headerClass = text.startsWith("/")
    ? "text-4xl font-semibold"
    : "text-6xl font-bold";

  return (
    <motion.div className={headerClass} {...ANIMATION_CONFIG}>
      {text}
    </motion.div>
  );
}
