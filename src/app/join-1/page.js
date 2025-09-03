"use client";

import Image from "next/image"
import Header from "../components/header"

import discordBlack from "@/assets/join/discord-black.png"
import discord from "@/assets/live-streaming/discord.png"
import SocialLinks from "../components/socialLinks"
import { useState } from "react"
import NewsletterSignUp from "../components/newsletterSignUp";

export default function Join() {
    const [email, setEmail] = useState("")
    return (
        <>
            <Header />
            <div className="bg-[url(@/assets/home/keefler.png)] h-full min-h-[1100px] absolute inset-0 -z-10 bg-no-repeat bg-cover bg-center opacity-50" />
            <div className="flex flex-col items-center h-full min-h-[911px]">
                <h1 className="text-white font-bodoni-moda italic text-[40px] md:text-[80px] border-b-1 border-pink-950 text-center">JOIN THE COMMUNITY</h1>
                <p className="text-white font-bodoni-moda italic text-[28px] md:text-[50px]">Join Keefler's Discord</p>
                <div className="flex flex-col md:flex-row mt-[20px] w-full items-center md:items-start justify-center">
                    <p className="text-white font-bodoni-moda italic text-[22px] md:text-[28px] w-full md:w-7/10 p-4 text-center md:text-left max-w-[600px]">Hop into Keefler's Discord to keep up with when new music is coming or when he goes live on Twitch. Get exclusive early looks at new music, behind the scenes content from the studio, and be a part of creative decisions like voting on cover art and which songs to release. Or just hang out with Keefler and the rest of the community to chat about your favorite things. In addition to providing exclusive content,  Keefler wants his Discord to be a place to chill, chat, game, and relax</p>
                    <div className="relative w-full md:w-3/10 min-w-[250px] md:min-w-[350px] md:ml-4 mt-4 flex flex-col items-center">
                        <div className="relative w-[333px]">
                            <Image src={discord} width={333} className="w-full max-w-[333px] h-auto" alt="Discord logo" />
                            <Image src={discordBlack} className="absolute top-[20px] left-[24px]" width={288} alt="Discord wordmark" />
                        </div>
                        <a href="https://discord.gg/MsEwjY2"><div className="mt-[30px] bg-black border-pink-700 border-1 text-3xl text-pink-700 font-semibold py-6 w-[250px] text-center">JOIN HERE &gt;</div></a>
                    </div>
                </div>
            </div>
            <div className="bg-[#fe0860] w-full md:h-[350px] flex flex-col items-center py-2">
                <h2 className="text-white font-bodoni-moda italic text-[32px] md:text-[60px] text-center mt-3">Follow Keefler Everywhere</h2>
                <SocialLinks outerClassName="!mt-2" iconClassName="text-[#fe0860] w-[36px] h-[36px] text-[24px] md:w-[50px] md:h-[50px] md:text-[30px]" />
                <div className="flex flex-col-reverse items-center md:flex-row md:items-start justify-center w-full px-4">
                    <NewsletterSignUp email={email} setEmail={setEmail} />
                    <p className="text-white font-bodoni-moda italic text-[24px] md:text-[30px] md:ml-8 mt-6 md:mt-0 text-center md:text-left">SIGN UP<br/>FOR THE<br/>NEWSLETTER</p>
                </div>
            </div>
        </>
    )
}