import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "leaderboard",
  description: "10x leaderboard app",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen w-screen overflow-hidden bg-black">
        {children}
      </body>
    </html>
  );
}

export default Layout;
