import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "mikmedia | Elite Design Suite",
  description: "Next-generation graphic design, image generation, and video editing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-background text-foreground antialiased dark">
      <body className="h-full flex overflow-hidden">
        <Sidebar />
        <main className="flex-1 relative overflow-auto bg-background">
          {children}
        </main>
      </body>
    </html>
  );
}
