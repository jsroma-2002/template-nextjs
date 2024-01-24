import type { Metadata } from "next";
import React from "react";
import "../config/theme/globals.css";

export const metadata: Metadata = {
  title: "Next.js Template",
  description: "Next.js Template with TypeScript, Tailwind CSS, and ESLint",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
