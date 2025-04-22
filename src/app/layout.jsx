import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";  // Import your external CSS file

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lama Dev School Management Dashboard",
  description: "React School Management System",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
