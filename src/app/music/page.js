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
            <div className="relative z-10 bg-black/20 pt-[60px] min-h-screen h-full flex justify-center">
                <div className="flex flex-col w-[300px]">
                    <Image src={badForMe} width={290} />
                    <Image src={relax} width={290} />
                    <Image src={present} width={290} />
                    <Image src={cover} width={290} />
                    <Image src={myDay} width={290} />
                    <Image src={captain} width={290} /> 
                </div>
                <div className="ml-[40px] w-[700px]">
                    <h1 className="italic font-bodoni-moda tracking-wide text-white text-[150px]">MUSIC</h1>
                    <div className="flex flex-col items-center">
                        <iframe data-testid="embed-iframe" className="rounded-md h-[500px] w-[679px]" src="https://open.spotify.com/embed/playlist/3WAb6ZfS3n6ZXQPTMBYQs9?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <iframe className="mt-6" width="560" height="315" src="https://www.youtube.com/embed/-DfHnyYowHA?si=MajaFkDb1Hnupnnf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <div className="bg-white w-[634px] h-[201px] mt-6">
                            <div className="flex h-[112px] items-center justify-center border-b-1 border-black">
                                <Image src={appleMusic} className="h-[80%]" />
                                <Image src={amazonMusic} className="h-[80%]" />
                            </div>
                            <SocialLinks outerClassName="!mt-[15px]" iconClassName="text-white w-[50px] h-[50px] text-[30px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}