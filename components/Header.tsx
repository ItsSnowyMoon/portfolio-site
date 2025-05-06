'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import DesignToggle from '../components/DesignToggle';

export default function Header() {
  const pathname = usePathname();

  const linkStyle = {
    textDecoration: "none",
    color: "#333",
    fontWeight: "normal",
  };

  const activeStyle = {
    ...linkStyle,
    fontWeight: "bold",
    borderBottom: "2px solid #333", // optional underline effect
  };

  return (
    <header
      style={{
        background: "#A3BAC3",
        padding: "1rem 2rem",
        display: "flex",
        gap: "1rem",
        fontFamily: "Arial, sans-serif",
        alignItems: 'center',
      }}
    >
      <Link href="/" style={pathname === "/" ? activeStyle : linkStyle}>
        Home
      </Link>
      <Link href="/about" style={pathname === "/about" ? activeStyle : linkStyle}>
        About
      </Link>
      <Link href="/projects" style={pathname === "/projects" ? activeStyle : linkStyle}>
        Projects
      </Link>
      <Link href="/contact" style={pathname === "/contact" ? activeStyle : linkStyle}>
        Contact
      </Link>
      
      {/* Design Toggle button aligned to the right */}
      <DesignToggle />
    </header>
  );
}
