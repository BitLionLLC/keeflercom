export default function Header() {
    return (
      <header className="relative top-0 z-50 w-full h-[132px] bg-[#2a0a2e] backdrop-blur ">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <div className="text-center w-full">
            <div className="tracking-[0.2em] text-white font-bodoni-moda italic text-[45px]">KEEFLER</div>
            <nav className="mt-2 hidden gap-[88px] text-md text-white/80 md:flex justify-center">
              <a href="/" className="hover:text-[#E3025A] active:text-[#E3025A] focus:text-[#E3025A] uppercase">Home</a>
              <a href="/about-me" className="hover:text-[#E3025A] active:text-[#E3025A] focus:text-[#E3025A] uppercase">About Me</a>
              <a href="#music" className="hover:text-[#E3025A] active:text-[#E3025A] focus:text-[#E3025A] uppercase">Music</a>
              <a href="#live" className="hover:text-[#E3025A] active:text-[#E3025A] focus:text-[#E3025A] uppercase">Live Streaming</a>
              <a href="#join" className="hover:text-[#E3025A] active:text-[#E3025A] focus:text-[#E3025A] uppercase">Join</a>
            </nav>
          </div>
        </div>
      </header>
    );
  }