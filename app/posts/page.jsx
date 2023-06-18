// app/posts/page.jsx

"use client";
import React, { useEffect, useState } from "react";
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

  return (
    <main className="flex flex-col items-center min-h-screen gap-4 py-20">
      <h1 className="text-4xl font-bold">Blog Posts</h1>
      <div className="flex flex-col gap-8 ">
        {posts.map((post) => (
          <div className="flex flex-col gap-1" key={post.id}>
            <h2 className="text-2xl underline underline-offset-4">
              {post.title}
            </h2>
            <p className="text-sm">By {post.author}</p>
            <p>{post.content}</p>
            <Link className="text-blue-500" href="/">
              Read More
            </Link>
          </div>
        ))}
      </div>
      <Link className="p-2 rounded-lg bg-slate-700" href="/">
        Back to Home
      </Link>
    </main>
  );
}
