// components/Header.tsx
"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        background: "#b581d6",
        padding: "1rem 2rem",
        display: "flex",
        gap: "1rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Link href="/" style={{ textDecoration: "none", color: "#333" }}>
        Home
      </Link>
      <Link href="/about" style={{ textDecoration: "none", color: "#333" }}>
        About
      </Link>
      <Link href="/projects" style={{ textDecoration: "none", color: "#333" }}>
        Projects
      </Link>
      <Link href="/contact" style={{ textDecoration: "none", color: "#333" }}>
        Contact
      </Link>
    </header>
  );
}
