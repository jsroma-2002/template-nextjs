import React from "react";
import type { Metadata } from "next";
import "../config/theme/globals.css";

export const metadata: Metadata = {
  title: "Movies Fav App",
  description: "Main Page for Movies Fav App created with Next.js",
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
