"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen gap-4 px-6 py-20 bg-blue-200">
      <motion.div
        className="text-4xl font-bold text-blue-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p> Hi 👋, there! I'm Trevor Brown and I am a ...</p>
      </motion.div>
      <motion.h2
        className="text-3xl font-semibold text-blue-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        Web Developer
      </motion.h2>

      <motion.h2
        className="text-3xl font-semibold text-blue-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        Investigative Journalist
      </motion.h2>

      <motion.h2
        className="text-3xl font-semibold text-blue-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        Data Visualization Designer
      </motion.h2>
      <Link
        className="p-2 mt-4 text-blue-200 bg-blue-800 rounded hover:bg-blue-700 active:bg-blue-900"
        href="/posts"
      >
        See Posts
      </Link>
      <Link
        className="p-2 mt-4 text-blue-200 bg-blue-800 rounded hover:bg-blue-700 active:bg-blue-900"
        href="/posts/new"
      >
        Create Post
      </Link>
    </main>
  );
}
