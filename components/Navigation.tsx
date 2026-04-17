'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Acueil', href: '/' },
    { label: 'Meteo', href: '/weather' },
    { label: 'Voyage d\'études', href: '/class-trip' },
    { label: 'Espace privé', href: '/private' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Branding */}
          <Link href="/" className="text-xl font-bold">
            11VP1
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${isActive(item.href)
                  ? 'text-white font-semibold border-b-2 border-white pb-1'
                  : 'text-blue-100 hover:text-white'
                  } transition-colors`}
              >
                {item.label}
              </Link>
            ))}
            {/* External TeamUp Link */}
            <a
              href="https://teamup.com/ksed29ccbf360b6217"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white transition-colors"
            >
              TeamUp ↗
            </a>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-6 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && <MobileMenu navItems={navItems} isActive={isActive} onClose={() => setIsOpen(false)} />}
      </div>
    </nav>
  );
}
