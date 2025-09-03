import Image from "next/image";
import Header from "../components/header"

import badForMe from '@/assets/music/bad.png'
import captain from '@/assets/music/captain.png'
import cover from '@/assets/music/cover.png'
import myDay from '@/assets/music/my-day.png'
import present from '@/assets/music/present.png'
import relax from '@/assets/music/relax.png'

import appleMusic from '@/assets/music/apple-music.png'
import amazonMusic from '@/assets/music/amazon-music.png'
import SocialLinks from "../components/socialLinks";

export default function Music () {
    return (
        <div className="relative">
            <Header />
            <div className="bg-[url(@/assets/music/bg.png)] absolute inset-0 -z-10 bg-no-repeat bg-cover bg-center opacity-50 min-h-screen h-full w-full"/>
            <div className="relative z-10 bg-black/20 min-h-screen h-full flex flex-col md:flex-row items-center md:items-start justify-center">
                <div className="flex flex-col w-full md:w-[30%] max-w-[300px]">
                    <Image src={badForMe} width={290} style={{ width: '100%', height: 'auto' }} alt="Bad For Me cover art" />
                    <Image src={relax} width={290} style={{ width: '100%', height: 'auto' }} alt="Relax cover art" />
                    <Image src={present} width={290} style={{ width: '100%', height: 'auto' }} alt="Present cover art" />
                    <Image src={cover} width={290} style={{ width: '100%', height: 'auto' }} alt="Album cover art" />
                    <Image src={myDay} width={290} style={{ width: '100%', height: 'auto' }} alt="My Day cover art" />
                    <Image src={captain} width={290} style={{ width: '100%', height: 'auto' }} alt="Captain cover art" /> 
                </div>
                <div className="w-full md:w-[70%] max-w-[700px] mt-6 md:mt-0 md:ml-[40px] px-4 md:px-0 pt-[40px]">
                    <h1 className="italic font-bodoni-moda tracking-wide text-white text-5xl md:text-[150px] text-center md:text-left">MUSIC</h1>
                    <div className="flex flex-col items-center">
                        <div className="w-full max-w-[679px] rounded-md overflow-hidden mt-4">
                            <div className="relative w-full pt-[56.25%]">
                                <iframe
                                    data-testid="embed-iframe"
                                    className="absolute inset-0 h-full w-full rounded-md"
                                    src="https://open.spotify.com/embed/playlist/3WAb6ZfS3n6ZXQPTMBYQs9?utm_source=generator"
                                    frameBorder={0}
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                    loading="lazy"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        <div className="w-full max-w-[560px] rounded-md overflow-hidden mt-6">
                            <div className="relative w-full pt-[56.25%]">
                                <iframe
                                    className="absolute inset-0 h-full w-full"
                                    src="https://www.youtube.com/embed/-DfHnyYowHA?si=MajaFkDb1Hnupnnf"
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        <div className="bg-white w-full max-w-[634px] mt-6 p-4">
                            <div className="flex flex-wrap h-auto min-h-[112px] items-center justify-center border-b-1 border-black">
                                <Image src={appleMusic} className="h-[80%]" alt="Listen on Apple Music" />
                                <Image src={amazonMusic} className="h-[80%]" alt="Listen on Amazon Music" />
                            </div>
                            <SocialLinks outerClassName="!mt-[15px]" iconClassName="text-white w-[50px] h-[50px] text-[30px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}