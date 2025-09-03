import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitch, faTiktok, faInstagram, faYoutube, faTwitter, faSpotify, faItunesNote } from "@fortawesome/free-brands-svg-icons";

export default function SocialLinks ({ outerClassName="", twitchIconClassName="text-[62px] w-[62px] h-[62px]", iconClassName="text-[40px] text-[#da91d1] w-[62px] h-[62px]" }) {
    return (
        <div className={`${"mt-[100px] flex-wrap justify-center md:flex-nowrap flex gap-5"} ${outerClassName}`}>
            <a href="https://www.twitch.tv/keefler_elf">
            <FontAwesomeIcon icon={faTwitch} className={`text-black ${twitchIconClassName}`} aria-label="Twitch" />
            </a>
            <a href="https://www.tiktok.com/@keeflermusic">
            <FontAwesomeIcon icon={faTiktok} className={`bg-black py-3 px-2 rounded-full ${iconClassName}`} aria-label="TikTok" />
            </a>
            <a href="https://www.instagram.com/keefler_elf/">
            <FontAwesomeIcon icon={faInstagram} className={`bg-black py-3 px-2 rounded-full ${iconClassName}`} aria-label="Instagram" />
            </a>
            <a href="https://youtube.com/@keeflermusic">
            <FontAwesomeIcon icon={faYoutube} className={`bg-black py-3 px-2 rounded-full ${iconClassName}`} aria-label="YouTube" />
            </a>
            <a href="https://x.com/Keefler_Elf">
            <FontAwesomeIcon icon={faTwitter} className={`bg-black py-3 px-2 rounded-full ${iconClassName}`} aria-label="Twitter" />
            </a>
            <a href="https://open.spotify.com/artist/3t3zKVdiWERcdDHg6ei89c">
            <FontAwesomeIcon icon={faSpotify} className={`bg-black py-3 px-2 rounded-full ${iconClassName}`} aria-label="Spotify" />
            </a>
            <a href="https://music.apple.com/us/artist/keefler/1567547480">
            <FontAwesomeIcon icon={faItunesNote} className={`bg-black py-3 px-2 rounded-full ${iconClassName}`} aria-label="Apple Music" />
            </a>
        </div>
    )
}