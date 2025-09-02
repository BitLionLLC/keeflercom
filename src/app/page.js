"use client";

import Image from "next/image";
import { useState } from "react";

import Header from "./components/header";
import SocialLinks from "./components/socialLinks";

import banner from "../assets/home/banner.png";
import prime from "../assets/home/prime.png";
import musicvideo from "../assets/home/musicvideo.png";
import livestreaming from "../assets/home/livestreaming.png";
import join from "../assets/home/join.png";
import keefler from "../assets/home/keefler.png";
import grid from "../assets/home/grid.png";
import primeAlbum from "../assets/home/prime_album.png";

function HeroSection() {
  return (
    <section id="home" className="relative h-[757px] w-full border-b-white border-b-[0.5px]">
      <Image src={banner} alt="Keefler banner" fill priority className="w-full h-full object-cover object-center brightness-140" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex h-full w-full items-end justify-center pb-16">
        <div className="">
          <div className="w-[175px] rounded-full text-white text-center px-6 border-5 py-2 text-md bg-[#220725] shadow tracking-[0.2em] font-bold">PRE-SAVE</div>
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
              <a href="#" className="rounded-full text-white px-8 border-5 py-3 text-md bg-[#220725] shadow  tracking-[0.2em] font-bold">STREAM NOW</a>
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
        <div className="mx-auto flex flex-col w-full max-w-6xl items-end justify-between px-6 absolute top-[50px]">
          <div className="flex flex-col items-end">
            <h2 className="text-3xl font-light italic font-bodoni-moda tracking-wide text-white text-[80px] [text-shadow:3px_3px_2px_rgba(0,0,0,0.5)]">"BAD FOR ME"</h2>
            <div className="mt-2 flex gap-4">
              <a href="#" className="rounded-full text-white px-8 border-5 py-3 text-md bg-[#220725] shadow tracking-[0.2em] font-bold">STREAM NOW</a>
            </div>
          </div>
          <div className="hidden md:block absolute left-0 top-[40px]">
            <div className="relative h-[400px] w-[400px] overflow-hidden rounded-full border-6 border-white shadow-xl">
              <Image src={musicvideo} alt="Music video" fill className="w-full object-cover object-center brightness-140" />
              <a href="#" className="w-[255px] text-center rounded-full text-white px-8 border-4 py-3 text-md bg-[#220725] shadow  tracking-[0.2em] font-bold z-10 absolute bottom-[35px] left-[70px]">MUSIC VIDEO</a>
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
      <div className="absolute inset-0 flex items-start justify-end pb-10">
        <div className="text-center">
          <h2 className="font-light italic text-white text-[80px] font-bodoni-moda tracking-wide [text-shadow:3px_3px_2px_rgba(0,0,0,0.5)]">LIVE STREAMING</h2>
          <div className="-mt-2 flex justify-end">
            <a href="#" className="text-center rounded-full text-white px-1 border-4 py-1 text-md bg-[#220725] shadow  tracking-[0.2em] font-bold z-10">COME CHILL</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function JoinSection({ email, setEmail }) {
  return (
    <section id="join" className="relative">
      <div className="relative h-[1002px] w-full">
        <Image src={join} alt="Join the community" fill className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0" />
      </div>
      <div className="absolute inset-0 flex items-start pt-2">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
          <div className="max-w-xl">
            <h2 className="font-light italic text-white text-[80px] font-bodoni-moda tracking-wide leading-[01]">JOIN THE COMMUNITY</h2>
            <div className="mt-6">
              <a href="#" className="text-center rounded-full text-white px-14 border-4 py-2 text-md bg-[#220725] shadow  tracking-[0.2em] font-bold z-10">LEARN MORE</a>
            </div>
            <div className="mt-10">
              <h3 className="font-light italic text-white font-bodoni-moda tracking-wide text-[45px]">SIGN UP FOR THE NEWSLETTER</h3>
              <form className="mt-4 max-w-md">
                <label htmlFor="email" className="sr-only">Email</label>
                <p className="text-white/60">Enter your email here *</p>
                <input className="w-full focus:bg-white/30 h-[40px] focus:border-0 focus:ring-0 outline-0 p-2" value={email} onChange={e => setEmail(e.target.value)} />
                <div className="flex justify-between">
                  <div className="mt-3 flex items-center gap-3">
                    <input type="checkbox" className="!bg-transparent" required />
                    <label htmlFor="subscribe" className="text-md">Yes, subscribe me to your<br/> newsletter. *</label>
                  </div>
                  <button type="button" className="mt-4 rounded bg-black px-6 py-2 text-sm font-semibold text-white">Submit</button>
                </div>
              </form>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [email, setEmail] = useState("")
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <PrimeSection />
      <BadForMeSection />
      <LiveStreamingSection />
      <JoinSection email={email} setEmail={setEmail} />
    </main>
  );
}
