"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky z-50 ${
        scrolled ? "top-4 mx-auto max-w-5xl px-4" : "top-0 w-full px-0"
      }`}
    >
      <div
        className={`flex items-center ${
          scrolled
            ? "bg-white/50 backdrop-blur-md rounded-full shadow-lg px-16 h-14 justify-between gap-80"
            : "bg-[#050322] px-8 h-16 justify-between"
        }`}
      >
        <Link
          href="/"
          className={`text-xl font-bold ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          Logo
        </Link>

        <nav className="flex gap-8">
          <Link
            href="/about"
            className={scrolled ? "text-gray-600 hover:text-black" : "text-white hover:text-gray-300"}
          >
            about
          </Link>
          <Link
            href="#"
            className={scrolled ? "text-gray-600 hover:text-black" : "text-white hover:text-gray-300"}
          >
            service
          </Link>
          <Link
            href="#"
            className={scrolled ? "text-gray-600 hover:text-black" : "text-white hover:text-gray-300"}
          >
            contact
          </Link>
        </nav>
      </div>
    </header>
  );
}