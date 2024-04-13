/* eslint-disable @next/next/no-page-custom-font */
"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "../components/Footer";
import { Providers } from "./providers";
import Navbarconst from "../components/Navbar";



export default function RootLayout({ children }) {



  return (
    <html lang="en" className="general">

    <body>
      <Providers>
        <Navbarconst/>
        {children}
     </Providers>
    </body>
  </html>
  );
}
