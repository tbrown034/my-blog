"use client";
// app/posts/new/page.jsx
import { useState } from "react";
import Link from "next/link";
export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author, content }),
    });

    if (response.ok) {
      alert("Post created successfully");
      // Optionally, you can redirect the user to the list of posts or the created post
      // window.location.href = '/posts';
    } else {
      alert("Failed to create post");
    }
  };

  return (
    <section className="flex flex-col items-center min-h-screen gap-4 py-20">
      <h1 className="text-4xl font-bold">Create new post</h1>
      <h2 className="text-lg font-semibold">Enter Your New Blog Post Here</h2>

      <form className="flex flex-col gap-2 text-black" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="p-2"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          className="p-2"
        />
        <textarea
          rows={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="p-2"
        ></textarea>
        <button
          className="p-2 rounded-lg bg-slate-700 focus:bg-slate-600 active:bg-slate-500 text-slate-200"
          type="submit"
        >
          Create Post
        </button>
      </form>
      <Link
        className="p-2 rounded-lg bg-slate-700 focus:bg-slate-600 active:bg-slate-500 text-slate-200"
        href="/"
      >
        Back to Home
      </Link>
    </section>
  );
}
