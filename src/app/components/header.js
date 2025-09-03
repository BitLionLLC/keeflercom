"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close the mobile menu when the route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const getLinkClasses = (href) => {
    const isActive = pathname === href;
    return `uppercase hover:text-[#E3025A] focus:text-[#E3025A] ${isActive ? "text-[#E3025A]" : "text-white/80"}`;
  };

  return (
    <header className={`relative top-0 z-50 w-full ${mobileOpen ? "h-auto" : "h-[80px]"} md:h-[132px] bg-[#2a0a2e] backdrop-blur`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden absolute right-4 top-4 inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-controls="mobile-menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          {mobileOpen ? (
            // Close (X) icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        <div className="text-center w-full">
          <div className="tracking-[0.2em] text-white font-bodoni-moda italic text-[45px]">KEEFLER</div>
          {/* Desktop nav */}
          <nav className="mt-2 hidden gap-[88px] text-md text-white/80 md:flex justify-center">
            <Link href="/" className={getLinkClasses("/")}>Home</Link>
            <Link href="/about-me" className={getLinkClasses("/about-me")}>About Me</Link>
            <Link href="/music" className={getLinkClasses("/music")}>Music</Link>
            <Link href="/live-streaming" className={getLinkClasses("/live-streaming")}>Live Streaming</Link>
            <Link href="/join-1" className={getLinkClasses("/join-1")}>Join</Link>
          </nav>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      <nav id="mobile-menu" className={`${mobileOpen ? "block" : "hidden"} md:hidden px-4 pb-4`}>
        <div className="mt-2 flex flex-col items-center gap-3 text-lg">
          <Link href="/" className={`${getLinkClasses("/")} block py-1`} onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/about-me" className={`${getLinkClasses("/about-me")} block py-1`} onClick={() => setMobileOpen(false)}>About Me</Link>
          <Link href="/music" className={`${getLinkClasses("/music")} block py-1`} onClick={() => setMobileOpen(false)}>Music</Link>
          <Link href="/live-streaming" className={`${getLinkClasses("/live-streaming")} block py-1`} onClick={() => setMobileOpen(false)}>Live Streaming</Link>
          <Link href="/join-1" className={`${getLinkClasses("/join-1")} block py-1`} onClick={() => setMobileOpen(false)}>Join</Link>
        </div>
      </nav>
    </header>
  );
}