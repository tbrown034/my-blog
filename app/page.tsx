// app/page.tsx
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4 mx-auto bg-slate-800 text-slate-200">
      <h1 className="text-4xl font-bold">My Blog</h1>
      <h3 className="text-lg font-semibold">
        A test CRUD app that allows users to create, read, update and delete
        posts.
      </h3>
      <Link
        className="p-2 rounded bg-slate-600 hover:bg-slate-500 active:bg-slate-400"
        href="/posts"
      >
        See Posts
      </Link>
    </main>
  );
}
