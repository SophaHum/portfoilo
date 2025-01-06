'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { ThemeToggle } from './theme-toggle';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  {
    label: 'Home',
    page: '/'
  },
  {
    label: 'Tech Stack',
    page: '/tech-stack'
  },
  {
    label: 'Work',
    page: '/work'
  },
  {
    label: 'About',
    page: '/about'
  },
  {
    label: 'Contact',
    page: '/contact'
  },{
    label: 'View CV',
    page: '/view-cv'
  }
];

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-transparent bg-clip-text bg-300% animate-gradient">SOPHA HUM</span>
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <button
            className="md:hidden"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
          </button>
          <nav className={`${navbar ? 'block' : 'hidden'} md:block absolute md:relative top-14 left-0 w-full md:w-auto bg-background md:bg-transparent py-4 md:py-0 border-b md:border-none`}>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 px-4 md:px-0">
              {NAV_ITEMS.map(({ label, page }) => (
                <Link
                  key={label}
                  href={page}
                  className={`${pathname === page ? 'text-purple-500' : 'text-gray-300'} hover:text-purple-500 transition-colors`}
                  onClick={() => setNavbar(false)}
                >
                  {label}
                </Link>
              ))}
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
