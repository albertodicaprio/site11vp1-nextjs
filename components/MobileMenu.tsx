'use client';

import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  navItems: NavItem[];
  isActive: (href: string) => boolean;
  onClose: () => void;
}

export default function MobileMenu({ navItems, isActive, onClose }: MobileMenuProps) {
  return (
    <div className="md:hidden bg-blue-700 pb-4">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className={`block px-4 py-3 ${
            isActive(item.href)
              ? 'bg-blue-800 text-white font-semibold border-l-4 border-white'
              : 'text-blue-100 hover:bg-blue-800 hover:text-white'
          } transition-colors`}
        >
          {item.label}
        </Link>
      ))}
      {/* External TeamUp Link */}
      <a
        href="https://teamup.com"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
        className="block px-4 py-3 text-blue-100 hover:bg-blue-800 hover:text-white transition-colors"
      >
        TeamUp ↗
      </a>
    </div>
  );
}
