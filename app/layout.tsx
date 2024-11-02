import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Playground",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Only include React DevTools in development

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
