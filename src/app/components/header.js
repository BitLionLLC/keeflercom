"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const getLinkClasses = (href) => {
    const isActive = pathname === href;
    return `uppercase hover:text-[#E3025A] focus:text-[#E3025A] ${isActive ? "text-[#E3025A]" : "text-white/80"}`;
  };

  return (
    <header className="relative top-0 z-50 w-full h-[132px] bg-[#2a0a2e] backdrop-blur ">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <div className="text-center w-full">
          <div className="tracking-[0.2em] text-white font-bodoni-moda italic text-[45px]">KEEFLER</div>
          <nav className="mt-2 hidden gap-[88px] text-md text-white/80 md:flex justify-center">
            <Link href="/" className={getLinkClasses("/")}>Home</Link>
            <Link href="/about-me" className={getLinkClasses("/about-me")}>About Me</Link>
            <Link href="/music" className={getLinkClasses("/music")}>Music</Link>
            <Link href="/live-streaming" className={getLinkClasses("/live-streaming")}>Live Streaming</Link>
            <Link href="/join-1" className={getLinkClasses("/join-1")}>Join</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}