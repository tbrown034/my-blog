import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Blog",
  description: "Created by Trevor Brown",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="p-2 mx-auto bg-slate-800 text-slate-200" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
