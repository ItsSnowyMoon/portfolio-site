'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DesignToggle from '../components/DesignToggle';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(10px)',
        backgroundColor: 'color-mix(in srgb, var(--surface-color) 85%, transparent)',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
      }}
    >
      <nav
        style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          padding: '0.75rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Left: Navigation links */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
          }}
        >
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/projects', label: 'Projects' },
            { href: '/contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                padding: '0.45rem 0.9rem',
                borderRadius: '999px',
                fontSize: '0.95rem',
                fontWeight: isActive(href) ? 600 : 500,
                color: isActive(href)
                  ? 'var(--accent-color)'
                  : 'var(--text-color)',
                backgroundColor: isActive(href)
                  ? 'var(--accent-soft)'
                  : 'transparent',
                transition:
                  'background-color var(--transition-fast), color var(--transition-fast)',
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right: Theme toggle */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <DesignToggle />
        </div>
      </nav>
    </header>
  );
}
