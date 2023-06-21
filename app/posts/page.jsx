import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <main className="flex flex-col items-center min-h-screen gap-4 px-6 py-20 text-blue-800 bg-blue-200">
      <h1 className="text-4xl font-bold">Blog Posts</h1>
      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <motion.div
            className="flex flex-col gap-1"
            key={post.id}
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.1 * post.id }}
          >
            <h2 className="text-2xl underline underline-offset-4">
              {post.title}
            </h2>
            <p className="text-sm">By {post.author}</p>
            <p>{post.content}</p>
            <Link href="/" className="text-blue-500">
              Read More
            </Link>
          </motion.div>
        ))}
      </div>
      <Link href="/" className="p-2 text-blue-200 bg-blue-800 rounded-lg">
        Back to Home
      </Link>
    </main>
  );
}
