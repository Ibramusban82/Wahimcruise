import type { Metadata } from "next";
import "./globals.css";

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
      <body className="h-full">
        {children}
      </body>
    </html>
  );
}
