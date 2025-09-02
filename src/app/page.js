import Image from "next/image";
import banner from "../assets/home/banner.jpeg";
import prime from "../assets/home/prime.jpeg";
import musicvideo from "../assets/home/musicvideo.jpeg";
import livestreaming from "../assets/home/livestreaming.jpeg";
import join from "../assets/home/join.jpeg";
import keefler from "../assets/home/keefler.jpeg";

function Header() {
  return (
    <header className="relative top-0 z-50 w-full h-[132px] bg-[#2a0a2e]/95 backdrop-blur supports-[backdrop-filter]:bg-[#220725]/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <div className="text-center w-full">
          <div className="tracking-[0.2em] text-white font-bodoni-moda italic text-[45px]">KEEFLER</div>
          <nav className="mt-2 hidden gap-[88px] text-md text-white/80 md:flex justify-center">
            <a href="#home" className="hover:text-[#E3025A] active:text-[#E3025A] focus:text-[#E3025A] uppercase">Home</a>
            <a href="#about" className="hover:text-[#E3025A] active:text-[#E3025A] focus:text-[#E3025A] uppercase">About Me</a>
            <a href="#music" className="hover:text-[#E3025A] active:text-[#E3025A] focus:text-[#E3025A] uppercase">Music</a>
            <a href="#live" className="hover:text-[#E3025A] active:text-[#E3025A] focus:text-[#E3025A] uppercase">Live Streaming</a>
            <a href="#join" className="hover:text-[#E3025A] active:text-[#E3025A] focus:text-[#E3025A] uppercase">Join</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative h-[757px] w-full border-b-white border-b-[0.5px]">
      <Image src={banner} alt="Keefler banner" fill priority className="w-full h-full object-cover object-center brightness-140" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex h-full w-full items-end justify-center pb-16">
        <div className="">
          <div className="mb-4 inline-block rounded-full border-white border-5 px-4 py-1 text-md tracking-widest text-white">PRE-SAVE</div>
          <h1 className="text-center px-6 text-4xl font-light italic font-bodoni-moda tracking-wide text-white text-[80px] [text-shadow:3px_3px_2px_rgba(0,0,0,0.5)]">
            NEW MUSIC SOON
          </h1>
        </div>
      </div>
    </section>
  );
}

function PrimeSection() {
  return (
    <section id="music" className="relative">
      <div className="relative h-[661px] w-full">
        <Image src={prime} alt="Prime single" fill className="w-full h-full object-cover object-center brightness-140" />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="absolute inset-0 flex flex-col items-end justify-end pt-10 mb-14">
        <div className="flex flex-col w-full items-center">
          <div className="flex justify-between w-4/7">
            <p className="mb-4 text-white/80 italic tracking-widest font-bodoni-moda text-3xl -ml-[50px]">Out Everywhere</p>
            <div className="">
              <a href="#" className="rounded-full text-white px-8 border-5 py-3 text-md bg-[#220725] shadow hover:bg-white tracking-[0.2em] font-bold">STREAM NOW</a>
            </div>
          </div>
          <h2 className="text-[80px] font-light italic text-white font-bodoni-moda">NEW SINGLE "PRIME"</h2>
        </div>
        
      </div>
    </section>
  );
}

function BadForMeSection() {
  return (
    <section className="relative bg-[#2a0a2e]">
      <div className="relative h-[781px] w-full">
        <Image src={keefler} alt="Bad For Me background" className="w-full h-full m-auto object-cover brightness-110 aspect-16/5" />
        <div className="absolute inset-0 mix-blend-multiply" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6">
          <div className="">
            <h2 className="text-3xl font-light italic font-bodoni-moda tracking-wide text-white text-[80px] [text-shadow:3px_3px_2px_rgba(0,0,0,0.5)]">"BAD FOR ME"</h2>
            <div className="mt-6 flex gap-4">
              <a href="#" className="rounded-full bg-white/90 px-5 py-3 text-sm font-semibold text-[#2a0a2e] shadow hover:bg-white">STREAM NOW</a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-white/70 shadow-xl">
              <Image src={musicvideo} alt="Music video" fill className="w-full object-cover object-center brightness-140" />
            </div>
            <div className="mt-4 text-center">
              <a href="#" className="rounded-full border border-white/80 px-4 py-2 text-xs tracking-widest text-white/90">MUSIC VIDEO</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LiveStreamingSection() {
  return (
    <section id="live" className="relative">
      <div className="relative h-[758px] w-full">
        <Image src={livestreaming} alt="Live streaming" fill className="w-full h-full object-cover object-center brightness-140" />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="absolute inset-0 flex items-end justify-center pb-10">
        <div className="text-center">
          <h2 className="text-4xl font-light italic text-white md:text-6xl">LIVE STREAMING</h2>
          <div className="mt-6">
            <a href="#" className="rounded-full bg-white/90 px-5 py-3 text-sm font-semibold text-[#2a0a2e] shadow hover:bg-white">COME CHILL</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function JoinSection() {
  return (
    <section id="join" className="relative">
      <div className="relative h-[1002px] w-full">
        <Image src={join} alt="Join the community" fill className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0" />
      </div>
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
          <div className="max-w-xl">
            <h2 className="text-5xl font-light italic leading-tight text-white md:text-7xl">JOIN THE COMMUNITY</h2>
            <div className="mt-6">
              <a href="#" className="rounded-full border border-white/80 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">LEARN MORE</a>
            </div>
            <div className="mt-10">
              <h3 className="text-2xl font-light italic text-white/90">SIGN UP FOR THE NEWSLETTER</h3>
              <form className="mt-4 max-w-md">
                <label htmlFor="email" className="sr-only">Email</label>
                <input id="email" type="email" placeholder="Enter your email here *" className="w-full rounded-none border border-white/60 bg-white/90 px-4 py-3 text-sm text-black placeholder-black/60 outline-none" />
                <div className="mt-3 flex items-center gap-3 text-white/90">
                  <input id="subscribe" type="checkbox" className="h-4 w-4" />
                  <label htmlFor="subscribe" className="text-sm">Yes, subscribe me to your newsletter.</label>
                </div>
                <button type="button" className="mt-4 rounded bg-black px-6 py-2 text-sm font-semibold text-white">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <PrimeSection />
      <BadForMeSection />
      <LiveStreamingSection />
      <JoinSection />
    </main>
  );
}
