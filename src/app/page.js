"use client";

import Image from "next/image";
import Link from "next/link";
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
import NewsletterSignUp from "./components/newsletterSignUp";

function HeroSection() {
  return (
    <section id="home" className="relative h-[520px] md:h-[757px] w-full border-b-white border-b-[0.5px]">
      <Image src={banner} alt="Keefler banner" fill priority className="w-full h-full object-cover object-center brightness-140" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex h-full w-full items-end justify-center pb-12 md:pb-16">
        <div className="">
          <a href="https://distrokid.com/hyperfollow/keefler/lashes"><div className="w-[175px] md:w-[175px] rounded-full text-white text-center px-6 border-5 py-2 text-sm md:text-md bg-[#220725] shadow tracking-[0.2em] font-bold mb-2">PRE-SAVE</div></a>
          <h1 className="text-center px-6 font-light italic font-bodoni-moda tracking-wide text-white text-4xl md:text-[80px] [text-shadow:3px_3px_2px_rgba(0,0,0,0.5)]">
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
      <div className="relative h-[480px] md:h-[661px] w-full">
        <Image src={prime} alt="Prime single" fill className="w-full h-full object-cover object-center brightness-140" />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center md:items-end justify-end pt-10 mb-14 px-4">
        <div className="flex flex-col w-full items-center">
          <div className="flex flex-col items-end gap-3 w-3/4 md:flex-row md:justify-between">
            <p className="mb-2 text-white/80 italic tracking-widest font-bodoni-moda text-xl md:text-3xl md:-ml-[50px]">Out Everywhere</p>
            <div className="flex flex-col items-center">
              <Image src={primeAlbum} className="w-[200px] md:w-[320px]" alt="Prime single album cover" />
              <a href="https://distrokid.com/hyperfollow/keefler/prime" className="rounded-full text-white text-center px-6 border-5 py-2 text-sm md:text-md bg-[#220725] shadow tracking-[0.2em] font-bold mt-6 mb-10">STREAM NOW</a>
            </div>
          </div>
          <h2 className="text-4xl md:text-[80px] font-light italic text-white font-bodoni-moda text-center md:text-left">NEW SINGLE "PRIME"</h2>
        </div>
        
      </div>
    </section>
  );
}

function BadForMeSection() {
  return (
    <section className="relative bg-[#2a0a2e]">
      <div className="relative h-[520px] md:h-[781px] w-full">
        <Image src={keefler} alt="Bad For Me background" className="w-full h-full m-auto object-cover brightness-110 aspect-16/5" />
        <div className="absolute inset-0 mix-blend-multiply" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="mx-auto flex flex-col w-full max-w-6xl items-end justify-between px-6 absolute top-[24px] md:top-[50px]">
          <div className="flex flex-col items-end">
            <h2 className="font-light italic font-bodoni-moda tracking-wide text-white text-4xl md:text-[80px] [text-shadow:3px_3px_2px_rgba(0,0,0,0.5)]">"BAD FOR ME"</h2>
            <div className="mt-2 flex gap-4">
              <a href="https://open.spotify.com/track/03BjZ3jdvonAakFqCihBM6?si=4cf8a83dfc16402f" className="rounded-full text-white text-center px-6 border-5 py-2 text-sm md:text-md bg-[#220725] shadow tracking-[0.2em] font-bold">STREAM NOW</a>
            </div>
          </div>
          <div className="hidden md:block absolute left-0 top-[40px]">
            <div className="relative h-[400px] w-[400px] overflow-hidden rounded-full border-6 border-white shadow-xl">
              <Image src={musicvideo} alt="Music video" fill className="w-full object-cover object-center brightness-140" />
              <a href="https://www.youtube.com/watch?v=-DfHnyYowHA" className="w-[255px] text-center rounded-full text-white px-8 border-4 py-3 text-md bg-[#220725] shadow tracking-[0.2em] font-bold z-10 absolute bottom-[35px] left-[70px]">MUSIC VIDEO</a>
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
      <div className="relative h-[520px] md:h-[758px] w-full">
        <Image src={livestreaming} alt="Live streaming" fill className="w-full h-full object-cover object-center brightness-140" />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="absolute inset-0 flex items-start justify-end pb-10">
        <div className="text-center">
          <h2 className="font-light italic text-white text-5xl md:text-[80px] font-bodoni-moda tracking-wide mt-3">LIVE STREAMING</h2>
          <div className="mt-2 flex justify-end">
            <Link href="/join-1" className="text-center rounded-full text-white px-4 border-4 py-2 text-sm md:text-md bg-[#220725] shadow tracking-[0.2em] font-bold z-10 mt-2">COME CHILL</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function JoinSection({ email, setEmail }) {
  return (
    <section id="join" className="relative overflow-hidden">
      <div className="relative h-[860px] md:h-[1002px] w-full">
        <Image src={join} alt="Join the community" fill className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0" />
      </div>
      <div className="absolute inset-0 flex items-start pt-4 md:pt-2 px-4">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
          <div className="max-w-xl">
            <h2 className="font-light italic text-white text-5xl md:text-[80px] font-bodoni-moda tracking-wide leading-[01]">JOIN THE COMMUNITY</h2>
            <div className="mt-6">
              <a href="https://www.keefler.com/" className="text-center rounded-full text-white px-10 md:px-14 border-4 py-2 text-sm md:text-md bg-[#220725] shadow  tracking-[0.2em] font-bold z-10">LEARN MORE</a>
            </div>
            <div className="mt-10">
              <h3 className="font-light italic text-white font-bodoni-moda tracking-wide text-2xl md:text-[45px]">SIGN UP FOR THE NEWSLETTER</h3>
              <NewsletterSignUp email={email} setEmail={setEmail} />
              <SocialLinks />
            </div>
          </div>
        </div>
        <Image src={grid} alt="beat pad" className="absolute -right-[500px] bottom-0"/>
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
