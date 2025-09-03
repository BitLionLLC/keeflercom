"use client";

import Image from "next/image"
import Header from "../components/header"

import discordBlack from "@/assets/join/discord-black.png"
import discord from "@/assets/live-streaming/discord.png"
import SocialLinks from "../components/socialLinks"
import { useState } from "react"

export default function Join() {
    const [email, setEmail] = useState("")
    return (
        <>
            <Header />
            <div className="bg-[url(@/assets/home/keefler.png)] min-h-screen h-full absolute inset-0 -z-10 bg-no-repeat bg-cover bg-center opacity-50" />
            <div className="flex flex-col items-center">
                <h1 className="text-white font-bodoni-moda italic text-[80px] border-b-1 border-pink-950 text-center">JOIN THE COMMUNITY</h1>
                <p className="text-white font-bodoni-moda italic text-[50px]">Join Keefler's Discord</p>
                <div className="flex flex-col md:flex-row mt-[40px]">
                    <p className="text-white font-bodoni-moda italic text-[28px] w-7/10 p-4">Hop into Keefler's Discord to keep up with when new music is coming or when he goes live on Twitch. Get exclusive early looks at new music, behind the scenes content from the studio, and be a part of creative decisions like voting on cover art and which songs to release. Or just hang out with Keefler and the rest of the community to chat about your favorite things. In addition to providing exclusive content,  Keefler wants his Discord to be a place to chill, chat, game, and relax</p>
                    <div className="relative w-3/10 min-w-[350px] ml-4 mt-4 flex flex-col items-center">
                        <Image src={discord} width={333} />
                        <Image src={discordBlack} className="absolute top-[20px] left-[26px]" width={288} />
                        <a><div className="mt-[30px] bg-black border-pink-700 border-1 text-3xl text-pink-700 font-semibold py-6 w-[250px] text-center">JOIN HERE &gt;</div></a>
                    </div>
                </div>
                <div className="bg-[#fe0860] w-full h-[350px] flex flex-col items-center">
                    <h2 className="text-white font-bodoni-moda italic text-[60px] text-center mt-3">Follow Keefler Everywhere</h2>
                    <SocialLinks outerClassName="!mt-2" iconClassName="text-[#fe0860] w-[50px] h-[50px] text-[30px]" />
                    <div className="flex justify-center w-full">
                        <form className="mt-6 w-[455px]">
                            <label htmlFor="email" className="sr-only">Email</label>
                            <p className="text-white/60">Enter your email here *</p>
                            <input className="w-full focus:bg-white/30 h-[40px] focus:border-0 focus:ring-0 outline-0 p-2 border-b-white border-b-1" value={email} onChange={e => setEmail(e.target.value)} />
                            <div className="flex flex-col md:flex-row md:justify-between">
                            <div className="mt-3 flex items-center gap-3">
                                <input type="checkbox" className="!bg-transparent" required />
                                <label htmlFor="subscribe" className="text-md">Yes, subscribe me to your<br/> newsletter. *</label>
                            </div>
                            <button type="button" className="mt-4 rounded bg-black px-6 py-2 text-sm font-semibold text-white">Submit</button>
                            </div>
                        </form>
                        <p className="text-white font-bodoni-moda italic text-[30px] ml-8">SIGN UP<br/>FOR THE<br/>NEWSLETTER</p>
                    </div>
                </div>
            </div>
        </>
    )
}