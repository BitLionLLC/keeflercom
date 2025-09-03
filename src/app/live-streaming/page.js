import Image from "next/image"
import Header from "../components/header"

import twitch from "@/assets/live-streaming/twitch.png"
import discord from "@/assets/live-streaming/discord.png"
import desk from "@/assets/live-streaming/desk.png"

export default function LiveStreaming() {
    return (
        <div>
            <Header />
            <div className="w-full bg-white h-[242px] flex flex-col items-center justify-center text-black">
                <h1 className="text-black font-bodoni-moda italic text-[80px]">LIVE STREAMING</h1>
                <p className="text-black font-bodoni-moda italic text-[24px] w-4/5 text-center">Join Keefler's live streams where he plays games, watches movies, and just hangs out to chat and connect with his community.</p>
            </div>
            <div className="flex h-[658px]">
                <div className="w-1/2 bg-black flex flex-col items-center gap-6 justify-center">
                    <h2 className="font-bodoni-moda italic text-[50px] text-white text-center">Follow on Twitch</h2>
                    <Image src={twitch}/>
                    <a href="https://www.twitch.tv/keefler_elf"><div className="bg-[#fe0860] text-black w-[150px] text-2xl p-2 font-bold text-center">FOLLOW</div></a>
                </div>
                <div className="w-1/2 bg-[#fe0860] flex flex-col items-center justify-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/gulbBgnqsVQ?si=KEM1lJGbbvQyj1mW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div className="flex h-[658px]">
                <div className="w-1/2 bg-black">
                    <Image src={desk}/>
                </div>
                <div className="w-1/2 bg-black flex flex-col items-center gap-6 justify-center">
                    <h2 className="font-bodoni-moda italic text-[50px] text-white text-center">Join the Discord</h2>
                    <Image src={discord}/>
                    <a href="https://discord.gg/MsEwjY2"><div className="bg-[#fe0860] text-black w-[150px] text-2xl p-2 font-bold text-center">JOIN NOW</div></a>
                </div>
            </div>
        </div>
    )
}