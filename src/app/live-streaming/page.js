import Image from "next/image"
import Header from "../components/header"

import twitch from "@/assets/live-streaming/twitch.png"
import discord from "@/assets/live-streaming/discord.png"
import desk from "@/assets/live-streaming/desk.png"

export default function LiveStreaming() {
    return (
        <div>
            <Header />
            <div className="w-full bg-white min-h-[180px] md:h-[242px] flex flex-col items-center justify-center text-black px-4">
                <h1 className="text-black font-bodoni-moda italic text-[40px] md:text-[80px] text-center">LIVE STREAMING</h1>
                <p className="text-black font-bodoni-moda italic text-[18px] md:text-[24px] w-full md:w-4/5 text-center">Join Keefler's live streams where he plays games, watches movies, and just hangs out to chat and connect with his community.</p>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap md:h-[658px]">
                <div className="w-full md:w-1/2 bg-black flex flex-col items-center gap-6 justify-center py-8">
                    <h2 className="font-bodoni-moda italic text-[32px] md:text-[50px] text-white text-center">Follow on Twitch</h2>
                    <Image src={twitch} className="w-[220px] md:w-auto h-auto" alt="Twitch logo"/>
                    <a href="https://www.twitch.tv/keefler_elf"><div className="bg-[#fe0860] text-black w-[150px] text-2xl p-2 font-bold text-center">FOLLOW</div></a>
                </div>
                <div className="w-full md:w-1/2 bg-[#fe0860] flex flex-col items-center justify-center p-4">
                    <div className="w-full aspect-video">
                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/gulbBgnqsVQ?si=KEM1lJGbbvQyj1mW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:h-[658px]">
                <div className="w-full md:w-1/2 bg-black flex items-center justify-center">
                    <Image src={desk} className="w-full h-auto max-h-[658px] object-contain" alt="Desk setup"/>
                </div>
                <div className="w-full md:w-1/2 bg-black flex flex-col items-center gap-6 justify-center py-8">
                    <h2 className="font-bodoni-moda italic text-[32px] md:text-[50px] text-white text-center">Join the Discord</h2>
                    <Image src={discord} className="w-[220px] md:w-auto h-auto" alt="Discord logo"/>
                    <a href="https://discord.gg/MsEwjY2"><div className="bg-[#fe0860] text-black w-[150px] text-2xl p-2 font-bold text-center">JOIN NOW</div></a>
                </div>
            </div>
        </div>
    )
}