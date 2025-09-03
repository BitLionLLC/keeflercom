import Link from "next/link";
import Image from "next/image";
import Header from "../components/header"
import SocialLinks from "../components/socialLinks"
import studio from '@/assets/about-me/studio.png'

export default function AboutMe () {
    return (
        <div className="relative">
            <Header />
            <div className="bg-[url(@/assets/about-me/bg.png)] absolute inset-0 -z-10 bg-no-repeat bg-cover bg-center opacity-50"/>
            <div className="relative z-10 bg-black/20 pt-[60px]">
                <h1 className="text-center px-6 font-light italic font-bodoni-moda tracking-wide text-white text-3xl sm:text-4xl md:text-[100px]">Who is Keefler</h1>
                <div className="p-6 font-serif flex flex-col gap-6 text-xl md:text-2xl lg:text-3xl leading-relaxed">
                    <p>Keefler is a Nashville based musician and content creator with the self proclaimed title "Captain of Chilling". If he's not in the studio, Keefler is probably hanging out live on <a className="underline" href="https://www.twitch.tv/keefler_elf">Twitch</a> or trying to make someone laugh on <a className="underline" href="https://www.tiktok.com/@keeflermusic">TikTok</a>.</p>
                    <p>Originally from Texas, Keefler has been in Nashville, TN making all kinds of different music since moving there in 2017. After meeting who would become his long term producers a couple years later, Keefler began releasing more pop-based music under the name <a className="underline" href="https://open.spotify.com/artist/2RepJuGMScwrv8zoAufnmf">Brayden Bauer</a>. By 2020, lots had changed. The urge to create something from scratch tookover, and with that feeling, a new persona was born. That's when the era of Keefler began, both for music and content creation.</p>
                    <p>Keefler began on twitch and quickly built a loyal community that has become his most vocal group of supporters online. Being an avid fan of video games throughout his life, live streaming to a community of gamers felt natural right from the start. From playing games to watching movies to just hanging out and talking with the chat, Twitch has been a great place to grow a community that Keefler can engage with directly and just be himself.</p>
                    
                </div>
                <div className="p-6 font-serif flow-root text-xl md:text-2xl lg:text-3xl leading-relaxed">
                    <Image src={studio} alt="Keefler in the studio" className="mx-auto my-4 block w-full max-w-[640px] md:float-right md:ml-4 md:mx-0 md:max-w:[80%] object-contain" />
                    <p>Keefler also grew quickly as personality on social media, accumulating millions of likes across platforms. Whether it's making jokes or singing parody songs, Keefler always wants to entertain you.</p>
                    <p className="mt-6">Of course, as Keefler, the plan was always to keep releasing music. Over the years there had been a lot of desire to make music of all kinds of genres. Keefler used his new persona as an opportunity to blend these sounds and show something unique. Keefler's music is a showcase of rapping, singing, and meaningful songwriting that is an evolution of everything he had done before.</p>
                    <p className="mt-6">Starting with a batch of pop-rap tracks, Keefler released his most well-received song "<a className="underline" href="https://open.spotify.com/track/03BjZ3jdvonAakFqCihBM6">Bad For Me</a>" in 2023 - a pop/rap/dance song that has become a cult classic within his community. With that, Keefler also released his first ever <a className="underline" href="https://www.youtube.com/watch?v=-DfHnyYowHA">music video</a>, brilliantly directed by his producer Dalton Wixom. Though the Bad For Me video is just the beginning for this group of creative friends.</p>
                    <p className="mt-6">Evolving his sound even more, Keefler feels as if this next group of songs he releases will be of his most true and genuine form yet. Once again blending his unique vocal talents, his next two singles "Prime" and "Lashes" are set to release before the end of the year.</p>
                    <p className="mt-6"><Link className="underline italic" href="/live-streaming">Join Keefler's Community</Link></p>
                </div>
            </div>
            <SocialLinks 
                outerClassName="!mt-4 w-full !ml-0 px-4 flex-wrap justify-center md:justify-end gap-4 md:gap-8"
                twitchIconClassName="text-[36px] w-10 h-10 md:text-[62px] md:w-[62px] md:h-[62px] text-white"
                iconClassName="text-white text-[24px] w-10 h-10 md:text-[40px] md:w-[62px] md:h-[62px]"
            />
        </div>
    )
}